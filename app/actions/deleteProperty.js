'use server'

import cloudinary from "@/config/cloudinary"
import connectDB from "@/config/database"
import Property from "@/models/Property"
import { getSessionUser } from "@/utils/getSessionUser"
import { revalidatePath } from "next/cache"

async function deleteProperty(propertyId) {

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        return new Error("User ID is required");
    }

    const { userId } = sessionUser;

    await connectDB();

    const property = await Property.findById(propertyId);

    if (!property) {
        return new Error("Property not found");
    }

    // verif ownership
    if (property.owner.toString() !== userId) {
        return new Error("Unauthorized");
    }


    //Extract Public ID from image URLs
    const publicIds = property.images.map(imageUrl => {
        const parts = imageUrl.split("/");
        return parts.at(-1).split(".")[0]; // Get the last part of the URL and remove the file extension
    });

    // Delete images from Cloudinary
    if (publicIds.length > 0) {
        for (let publicId of publicIds) {
            await cloudinary.uploader.destroy('propertypulse/' + publicId);
        }
    }
    await property.deleteOne();

    revalidatePath("/", 'layout');

}

export default deleteProperty;
