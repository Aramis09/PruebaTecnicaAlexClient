
interface ResponseStructure {
  data: unknown;
  error: boolean;
  msg: string;
  status: number;
}

export interface ResponseError extends ResponseStructure {
  data: null
}

export interface PropsReactQuery<A> {
  url: string;
  payload?: A;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | undefined;
  keys?: string[]
}

export interface UserCredentials {
  user: string;
  password: string;
}


export interface ResCreateUser extends ResponseStructure {
  data: ResCreateUserData;
}

export interface ResCreateUserData {
  user: string;
  password: string;
  img_profile: null;
  id: number;
}


export interface ResValidateUserReapeat extends ResponseStructure {
  data: ResValidateUserReapeatData;

}

export interface ResValidateUserReapeatData {
  validUser: boolean;
}


export interface ResLogin extends ResponseStructure {
  data: ResLoginData
}

export interface ResLoginData {
  id: string
  user: Pick<ResCreateUserData, "user">;
  validPassword: boolean;
  token: string;
}





export interface ResCreateOperation extends ResponseStructure {
  data: ResCreateOperationData;
}

export interface ResCreateOperationData {
  name: string;
  ticker: string;
  price: number;
  purchase_amount: number;
  user: ResCreateUserData;
  id: number;
}


export interface BodyCreateOperation extends Omit<ResCreateOperationData, "user" | "id"> {
  idUser: number;
}



export interface GetOperationList extends ResponseStructure {
  data: [GetOperationListData[], number]
}



export interface GetOperationListData extends Omit<ResCreateOperationData, "user"> { }


export interface BodyDeleteOperation {
  "idCurrency": number
}



export interface BodyEditOperation extends BodyDeleteOperation {

  name?: string | null;
  ticker?: string | null;
  price?: number | null;
  purchase_amount?: number | null;
}