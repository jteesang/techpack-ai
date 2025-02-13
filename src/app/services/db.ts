import { TechpackForm, TechpackPages, TechpackVersion, UploadInfo, UserDetails } from "@/app/types";
import { createClient } from "@supabase/supabase-js";
import formidable from "formidable";

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
export const saveUploadDescription = async (data: UploadInfo) => {
  const { data: insertedData, error } = await supabase
    .from('uploads')
    .insert([data])
    .select('id, image_path, description')
    .single()
  
  if (error) {
    console.error('Error inserting data:', error);
    throw new Error('Failed to insert data into Uploads table');
  }
  return insertedData;
}

export const getUploadDescription = async (techpackId: string) => {
  const { data: uploadDesc, error } = await supabase
  .from('uploads')
  .select('*')
  .eq('id', techpackId)
  .single()

  if (error) {
    console.error('Error getting uploads:', error);
    throw new Error('Failed to get entry from Uploads table');
  }
  return uploadDesc;
}

export const getImageUrl = async (id: string) => {
  const { data: imageUrl, error } = await supabase
  .from('uploads')
  .select('image_path')
  .eq('id', '003d4a4d-771a-47e3-aaec-01b9b6f060a0')
  .single()

  if (error) {
    console.error('Error getting uploads:', error);
    throw new Error('Failed to get entry from Uploads table');
  }
  console.log(`\n ------ imageUrl: ${imageUrl}`)
  return imageUrl;
}

export const saveTechpackForm = async (data: TechpackForm) => {
  const { data: insertedData, error } = await supabase
    .from('techpacks')
    .upsert([data])
  
  if (error) {
    console.error('Error inserting data:', error);
    throw new Error('Failed to insert data into Techpacks table');
  }
  return insertedData;
}

export const getTechpackForm = async (techpackId: string) => {
  const { data: techpack, error } = await supabase
    .from('techpacks')
    .select('*')
    .eq('id', techpackId)
    .single()

  if (error) {
    console.error('Error getting techpack:', error);
    throw new Error('Failed to get techpack from Techpacks table');
  }
  return techpack;
}

export const getTechpackOrCreate = async (techpackId: string, newData: TechpackForm) => {
  const { data, error, status } = await supabase
    .from ('techpacks')
    .select('*')
    .eq('id', techpackId)
    .single()

  if (error || !data) {
    console.error('Techpack not found, creating a new one.');
    const clonedData = JSON.parse(JSON.stringify(newData))

    const {data: insertedData, error: insertError } = await supabase
      .from('techpacks')
      .upsert([
        {
          ...clonedData
        }
      ]);
    
    if (insertError) {
      console.error('Error inserting data: ', insertError);
      throw new Error('Failed to insert new Techpack');
    }
    return insertedData;
  }
  return data;
}

export const checkTechpackFormExists = async(techpackId : string ) => {
  const { data, error } = await supabase
  .from('techpacks')
  .select('*')
  .eq('id', techpackId)

  if (error) {
    console.error('No entry for given techpack id', error);
    throw new Error('Failed to query techpack from Techpacks table')
  }
  console.log(`data: ${data}`)
  return data;
}

export const getTechpackPages = async (techpackId: string) => {
  console.log(`getTechpackPages db.ts: ${techpackId}`)
  const { data: selectedData, error } = await supabase
    .from('techpack_pages')
    .select('*')
    .eq('id', techpackId)

  if (error) {
    console.error('Error getting data into techpack_pages table:', error);
    throw new Error('Failed to getting data into techpacks_pages table');
  }
  return selectedData;
}

export const saveTechpackPages = async (techpackId: string, data: TechpackPages) => {
  // Check if record already exists
  const {data: existingRecord, error: fetchError } = await supabase
    .from('techpack_pages')
    .select('*')
    .eq('id', techpackId)
    .single();
  
  if (fetchError) console.error(`Fetch error: ${fetchError}`);
  
  if (!existingRecord) {
    const { data: insertedData, error } = await supabase
      .from('techpack_pages')
      .insert([{...data, id: techpackId}])

    if (error) console.error(`Insert error: ${error}`);
    else console.log(`Insert successful: ${data}`)
    return insertedData;
  } else {
    console.log(`Techpack pages record already exists, skipping insert.`)
    return;
  }
}

export const getUserTechpacks = async (userId: string) => {
  const { data: techpacks, error } = await supabase
  .from('techpacks')
  .select('id')
  .eq('user_id', userId)

  if (error) {
    console.error('Error getting techpacks for user id:', error);
    throw new Error('Failed to get techpacks from Techpacks table');
  }
  return techpacks;
}

// use this method somewhere
export const saveTechpackVersion = async (data: TechpackVersion) => {
  const { data: insertedData, error } = await supabase
  .from('techpack_versions')
  .insert([data])

  if (error) {
    console.error('Error inserting data into techpack_versions table:', error);
    throw new Error('Failed to insert data into techpack_versions table');
  }
return insertedData;
}

// use a join
export const getTechpacksForUser = async (userId: string) => {
  const { data: techpacks, error } = await supabase
  .from('techpacks')
  .select('id')
  .eq('user_id', userId)

  if (error) {
    console.error('Error getting techpacks for user id:', error);
    throw new Error('Failed to get techpacks from Techpacks table');
  }

  if (!techpacks || techpacks.length === 0) {
    return [];
  }

  const techpackIds = techpacks.map(tp => tp.id);

  // Fetch techpack_versions for the retrieved techpack_ids
  const { data: versions, error: versionError } = await supabase
  .from('techpack_versions')
  .select('*')
  .in('techpack_id', techpackIds);

  if (versionError) {
      console.error('Error fetching techpack versions:', versionError);
      return [];
  }

  return versions || [];
}

export const getUserDetails = async (userId: string) => {
  const { data: user, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)
  .single()
  
  if (error) {
    console.error('Error getting user for user id:', error);
    throw new Error('Failed to get user from users table');
  }
  return user;
}

export const saveUserDetails = async (data: UserDetails) => {
  const { data: insertedData, error } = await supabase
    .from('users')
    .update([data])
    .eq('id', data.id)

  if (error) {
    console.error('Error updating data:', error);
    throw new Error('Failed to insert data into Users table');
  }
  return insertedData;
}
// export const uploadImageToBucket = async (uploadName: string, file: formidable.File) => {
//     const fileBuffer = fs.readFileSync(file.filepath);
//     const { data: upload, error: uploadError } = await supabase.storage
//       .from('images')
//       .upload(`public/${uploadName}`, fileBuffer, {
//         contentType: file.mimetype || undefined,
//         cacheControl: '3600',
//         upsert: false,
//       });

//     if (uploadError) {
//       console.error(uploadError);
//       throw new Error('Failed to upload the file');
//     }
//     return upload;
// }

export const getImagePath = async (uploadName: string) => {
    // Generate a public URL
    const { data: publicURL } = supabase.storage
    .from('images')
    .getPublicUrl(`public/${uploadName}`);

    if (!publicURL) {
      console.error('Failed to get the public URL');
      throw new Error('Failed to get the public signed url');
    }
    return publicURL.publicUrl;
}

export const saveGeneratedImages = async (techpackId: string, flatSketchUrl: string, visualImageUrl: string) => {
  const { data: insertedData, error } = await supabase
    .from('uploads')
    .upsert({ id: techpackId, flatSketchUrl, visualImageUrl})
    .select('id, description, flatSketchUrl, visualImageUrl')

  if (error) {
    console.error('Error inserting generated images:', error);
    throw new Error('Failed to insert generated images into Uploads table');
  }
  return insertedData;
}

export { createClient };
