//-------- POST MODELS --------

export interface IPostRequest {
    title:                    string;
    body:                     string;
    creationDate:             Date;
    creator:                  string;
    estimatedPublicationDate: Date;
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
    creationDate:             Date;
    estimatedPublicationDate: Date;
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
