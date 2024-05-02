export type AsyncReducerType = 'idle' | 'pending' | 'resolved' | 'rejected';

export type AsyncReducerState<Response, ErrorResponse> = {
  status: AsyncReducerType;
  data: Response | null;
  error: ErrorResponse | null;
};

export interface AsyncHookReturn extends AsyncReducerState<any, any> {
  run: (promise: Promise<any>) => void;
}

export interface FetchI {
  url: string;
  method?: string;
  body?: { [key: string]: any };
  headers?: { [key: string]: any };
}
