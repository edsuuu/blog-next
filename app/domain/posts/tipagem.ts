export type PostData = {
    id: number;
    attributes: {
        title: string;
        content: {
            type: string;
            children: [
                {
                    text: string;
                    type: string;
                },
            ];
        };
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        image: ImageData;
        author: {
            data: AuthorData;
        };
    };
};

export type ImageData = {
    id: number;
    attributes: {
        name: string;
        alternativeText: null;
        caption: null;
        width: number;
        height: number;
        formats: {
            large: ImageFormat;
            small: ImageFormat;
            medium: ImageFormat;
            thumbnail: ImageFormat;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        providerMetadata: {
            publicId: string;
            resourceType: string;
        };
        createdAt: string;
        updatedAt: string;
    };
};

export type ImageFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    providerMetadata: {
        publicId: string;
        resourceType: string;
    };
};

export type AuthorData = {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
};

export type Meta = {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
};

export interface PostApiResponse {
    data: PostData;
    meta: Meta;
};
