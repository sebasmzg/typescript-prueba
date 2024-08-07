//-------- POST MODELS --------

export interface IPostRequest {
    title:                    string;
    body:                     string;
    creationDate:             string;
    creator:                  string;
    estimatedPublicationDate: string;
    status:                   string;
    approvalPercentage:       number;
    corrections:              string;
    platform:                 string;
    postUrl:                  string;
    multimediaUrl:            string;
}


export interface IPostResponse {
    postByUser:               number;
    title:                    string;
    body:                     string;
    creationDate:             string;
    estimatedPublicationDate: string;
    status:                   string;
    approvalPercentage:       number;
    corrections:              string;
    platform:                 string;
    postUrl:                  string;
    multimediaUrl:            string;
    creator:                  Creator;
    id:                       number;
    deletedAt:                null;
}

export interface Creator {
    id:       number;
    email:    string;
    password: string;
}
