import { supabase } from "./supabase";

export type Recommendation = {
  id: string;
  created_at: string;
  name: string;
  role: string | null;
  company: string | null;
  relationship: string | null;
  message: string;
  linkedin: string | null;
};

export async function listApprovedRecommendations(): Promise<Recommendation[]> {
  const { data, error } = await supabase
    .from("recommendations")
    .select("id,created_at,name,role,company,relationship,message,linkedin")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function submitRecommendation(input: {
  name: string;
  role?: string;
  company?: string;
  relationship?: string;
  message: string;
  linkedin?: string;
}) {
  const { error } = await supabase.from("recommendations").insert([
    {
      name: input.name.trim(),
      role: input.role?.trim() || null,
      company: input.company?.trim() || null,
      relationship: input.relationship?.trim() || null,
      message: input.message.trim(),
      linkedin: input.linkedin?.trim() || null,
      status: "pending",
    },
  ]);

  if (error) throw error;
}
