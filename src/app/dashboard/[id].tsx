import { supabase } from "@/app/utils/createClient";

export default async function Dashboard(id: string) {
  const { data: notes } = await supabase.from("users").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}