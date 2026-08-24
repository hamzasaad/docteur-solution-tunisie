export interface ContactRequest {
  fullName: string;
  organization?: string | null;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
