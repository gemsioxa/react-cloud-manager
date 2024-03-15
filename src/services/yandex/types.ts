export type SuccessRequest = {
    href: string;
    method: string;
    templated: boolean;
};

export type SuccessStatus = {
    status: string;
}

export type ErrorRequest = {
    message: string;
    description: string;
    error: string;
};

export type GetUserDiskMeta = {
    paid_max_file_size: number;
    max_file_size: number;
    total_space: number;
    trash_size: number;
    used_space: number;
    is_paid: boolean;
    reg_time: string;
    system_folders: {
        odnoklassniki: string;
        google: string;
        instagram: string;
        vkontakte: string;
        attach: string;
        mailru: string;
        downloads: string;
        applications: string;
        facebook: string;
        social: string;
        messenger: string;
        calendar: string;
        photostream: string;
        screenshots: string;
        scans: string;
    };
    user: {
        reg_time: string;
        display_name: string;
        uid: string;
        country: string;
        is_child: boolean;
        login: string;
    };
    unlimited_autoupload_enabled: boolean;
    revision: number;
}

export type GetUserDiskMetaData = {
    fields?: string;
}

export type DeleteResourceData = {
    fields?: string;
    force_async?: boolean;
    md5?: string;
    permanently?: boolean;
};

export type Resource = {
    antivirus_status: {},
    resource_id: string;
    share: {
        is_root: boolean;
        is_owned: boolean;
        rights: string;
    };
    file: string;
    size: number;
    photoslice_time: string;
    _embedded: {
        sort: string;
        items: Array<{}>;
        limit: number;
        offset: number;
        path: string;
        total: number;
    };
    exif: {
        date_time: string;
        gps_longitude: {};
        gps_latitude: {};
    };
    custom_properties: {};
    media_type: string;
    preview: string;
    type: string;
    mime_type: string;
    revision: number;
    public_url: string;
    path: string;
    md5: string;
    public_key: string;
    sha256: string;
    name: string;
    created: string;
    sizes: Array<{
        url: string;
        name: string;
    }>;
    modified: string;
    comment_ids: {
        private_resource: string;
        public_resource: string;
    };
};

export type GetResourceData = {
    fields?: string;
    limit?: number;
    offset?: number;
    preview_crop?: boolean;
    preview_size?: string;
    sort?: string;
};

export type PatchResourceData = {
    fields?: string;
    body?: {
        custom_properties?: {};
    };
};

export type PutResourceData = {
    fields?: string;
};

export type PostResourceCopyData = {
    from: string;
    path: string;
    fields?: string;
    force_async?: boolean;
    overwrite?: boolean;
};

export type GetResourceDownloadData = {
    fields?: string;
};

export type GetResourceFiles = {
    items: Array<Resource>;
    limit: number;
    offset: number;
};

export type GetResourceFilesData = {
    fields?: string;
    limit?: number;
    media_type?: string;
    offset?: number;
    preview_crop?: boolean;
    preview_size?: string;
    sort?: string;
};

export type GetResourceLastUploaded = {
    items: Array<Resource>;
    limit: number;
};

export type GetResourceLastUploadedData = {
    fields?: string;
    limit?: number;
    media_type?: string;
    preview_crop?: boolean;
    preview_size?: string;
};

export type ReplaceResourceData = {
    from: string;
    path: string;
    fields?: string;
    force_async?: boolean;
    overwrite?: boolean;
}

export type GetPublishedResourceListData = {
    fields?: string;
    limit?: number;
    offset?: number;
    preview_crop?: boolean;
    preview_size?: string;
    type?: 'file' | 'dir';
}

export type GetPublishedResourceList = {
    items: Array<Resource>;
    type: string;
    limit: number;
    offset: number;
}

export type PublishResourceData = {
    path: string;
    fields?: string;
}

export type UnpublishResourceData = {
    path: string;
    fields?: string;
}

export type GetResourceUploadLinkData = {
    path: string;
    fields?: string;
    overwrite?: boolean;
}

export type GetResourceUploadLink = {
    operation_id: string;
    href: string;
    method: string;
    templated: boolean;
}

export type UploadResourceWithUrlData = {
    path: string;
    url: string;
    disable_redirects?: boolean;
    fields?: string;
}

export type GetPublicResourceMetaData = {
    public_key: string;
    fields?: string;
    limit?: number;
    offset?: number;
    path?: string;
    preview_crop?: boolean;
    preview_size?: string;
    sort?: string;
}

export type SaveResourceToDownloadsData = {
    public_key: string;
    fields?: string;
    force_async?: boolean;
    name?: string;
    path?: string;
    save_path?: string;
}

export type EmptyBinData = {
    fields?: string;
    force_async?: boolean;
    path?: string;
}

export type GetBinResourcesData = {
    path: string;
    fields?: string;
    limit?: number;
    offset?: number;
    preview_crop?: boolean;
    preview_size?: string;
    sort?: string;
}

export type RestoreBinResourcesData = {
    path: string;
    fields?: string;
    force_async?: boolean;
    name?: string;
    overwrite?: boolean;
}

export type GetAsyncOperationStatusData = {
    operation_id: string;
    fields?: string;
}