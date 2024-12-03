export interface ResponseData<T extends Record<string, any> = any> {
  statusCode: number;
  message: string;
  data: T | null;
  success: boolean;
}
