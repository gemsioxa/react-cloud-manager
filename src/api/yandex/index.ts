import { AxiosResponse } from "axios";
import yandexHttpClient from "@/utils/yandexHttpClient";
import {
  DeleteResourceData,
  Resource,
  GetResourceData,
  PatchResourceData,
  PutResourceData,
  SuccessRequest,
  PostResourceCopyData,
  GetResourceDownloadData,
  GetResourceFilesData,
  GetResourceFiles,
  GetResourceLastUploadedData,
  GetResourceLastUploaded,
  ReplaceResourceData,
  GetPublishedResourceListData,
  GetPublishedResourceList,
  PublishResourceData,
  UnpublishResourceData,
  GetResourceUploadLinkData,
  GetResourceUploadLink,
  UploadResourceWithUrlData,
  GetPublicResourceMetaData,
  SaveResourceToDownloadsData,
  EmptyBinData,
  GetBinResourcesData,
  RestoreBinResourcesData,
  GetAsyncOperationStatusData,
  SuccessStatus,
  GetUserDiskMetaData,
  GetUserDiskMeta,
  YandexAPIType,
} from "./types";

// User disk 

// Get user disk metadata 
const getUserDiskMeta = (
  token?: string,
  data?: GetUserDiskMetaData
): Promise<AxiosResponse<GetUserDiskMeta>> => {
  return yandexHttpClient.get<GetUserDiskMeta>(
    "https://cloud-api.yandex.net/v1/disk",
    {
      params: {
        ...(data?.fields && { fields: data.fields })
      },
      headers: {
        Authorization: `OAuth ${token}`
      }
    }
  );
};

// Files and Folders

// Delete file or folder
const deleteResource = (
  token: string,
  path: string,
  data?: DeleteResourceData
): Promise<AxiosResponse<void>> => {
  return yandexHttpClient.delete<void>(
    "https://cloud-api.yandex.net/v1/disk/resources",
    {
      params: {
        path,
        ...(data && { data }),
      },
      headers: {
        Authorization: `OAuth ${token}`
      }
    }
  );
};

// Get meta info about file or folder
const getResource = (
  token: string,
  path: string,
  data?: GetResourceData
): Promise<AxiosResponse<Resource>> => {
  return yandexHttpClient.get<Resource>(
    "https://cloud-api.yandex.net/v1/disk/resources",
    {
      params: {
        path,
        ...(data && { data }),
      },
      headers: {
        Authorization: `OAuth ${token}`
      }
    }
  );
};

// Update resource user data
const patchResource = (
  path: string,
  data?: PatchResourceData
): Promise<AxiosResponse<Resource>> => {
  return yandexHttpClient.patch<Resource>(
    "https://cloud-api.yandex.net/v1/disk/resources",
    {
      path,
      ...data,
    }
  );
};

// Create folder
const putResource = (
  token: string,
  data: PutResourceData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.put<SuccessRequest>(
    `https://cloud-api.yandex.net/v1/disk/resources/?path=${data.path}`,
    undefined,
    {
      headers: {
        Authorization: `OAuth ${token}`
      }
    }
  );
};

// Create file or folder copy
const postResourceCopy = (
  data: PostResourceCopyData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.post<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/resources/copy",
    data
  );
};

// Get download file link
const getResourceDownload = (
  path: string,
  data?: GetResourceDownloadData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.get<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/resources/download",
    {
      params: {
        path,
        ...(data && { data }),
      },
    }
  );
};

// Get files list sorted by name
const getResourceFiles = (
  data?: GetResourceFilesData
): Promise<AxiosResponse<GetResourceFiles>> => {
  return yandexHttpClient.get<GetResourceFiles>(
    "https://cloud-api.yandex.net/v1/disk/resources/files",
    {
      params: {
        ...(data && { data }),
      },
    }
  );
};

// Get files list sorted by last uploaded
const getResourceLastUploaded = (
  data?: GetResourceLastUploadedData
): Promise<AxiosResponse<GetResourceLastUploaded>> => {
  return yandexHttpClient.get<GetResourceFiles>(
    "https://cloud-api.yandex.net/v1/disk/resources/last-uploaded",
    {
      params: {
        ...(data && { data }),
      },
    }
  );
};

// Replace file or directory
const replaceResource = (
  token: string,
  data: ReplaceResourceData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.post<SuccessRequest>(
    `https://cloud-api.yandex.net/v1/disk/resources/move?from=${data.from}&path=${data.path}`,
    undefined,
    {
      headers: {
        Authorization: `OAuth ${token}`
      }
    }
  );
};

// Get published resources list
const getPublishedResourceList = (
  data?: GetPublishedResourceListData
): Promise<AxiosResponse<GetPublishedResourceList>> => {
  return yandexHttpClient.get<GetPublishedResourceList>(
    "https://cloud-api.yandex.net/v1/disk/resources/public",
    {
      params: {
        ...(data && { data })
      },
    }
  );
};

// Publish resource
const publishResource = (
  data: PublishResourceData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.put<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/resources/publish",
    data
  );
};

// Cancel publishing resource
const unpublishResource = (
  data: UnpublishResourceData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.put<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/resources/unpublish",
    data
  );
};

// Get uploading file link
const getResourceUploadLink = (
  data: GetResourceUploadLinkData
): Promise<AxiosResponse<GetResourceUploadLink>> => {
  return yandexHttpClient.get<GetResourceUploadLink>(
    "https://cloud-api.yandex.net/v1/disk/resources/upload",
    {
      params: {
        ...(data && { data })
      },
    }
  );
};

// Upload resource using URL
const uploadResourceWithUrl = (
  data: UploadResourceWithUrlData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.post<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/resources/upload",
    data
  );
};

// Public files and folders

// Get metadata about public file or folder
const getPublicResourceMeta = (
  data: GetPublicResourceMetaData
): Promise<AxiosResponse<Request>> => {
  return yandexHttpClient.get<Request>(
    "https://cloud-api.yandex.net/v1/disk/public/resources",
    {
      params: {
        ...(data && { data })
      },
    }
  );
};

// Get metadata about public file or folder
const getPublicResourceDownloadLink = (
  data: GetPublicResourceMetaData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.get<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/public/resources/download",
    {
      params: {
        ...(data && { data })
      },
    }
  );
};

// Save public resource to Downloads directory
const saveResourceToDownloads = (
  data: SaveResourceToDownloadsData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.post<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/public/resources/save-to-disk",
    data
  );
};

// Bin

// Empty bin
const emptyBin = (
  data?: EmptyBinData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.delete<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/trash/resources",
    {
      params: {
        ...(data && { data })
      },
    }
  );
};

// Get bin resources
const getBinResources = (
  data: GetBinResourcesData
): Promise<AxiosResponse<Resource>> => {
  return yandexHttpClient.get<Resource>(
    "https://cloud-api.yandex.net/v1/disk/trash/resources",
    {
      params: {
        ...(data && { data })
      },
    }
  );
};

// Restore bin resource
const restoreBinResources = (
  data: RestoreBinResourcesData
): Promise<AxiosResponse<SuccessRequest>> => {
  return yandexHttpClient.put<SuccessRequest>(
    "https://cloud-api.yandex.net/v1/disk/trash/resources/restore",
    data
  );
};

// Async operation

// Get async operation status
const getAsyncOperationStatus = (
  data: GetAsyncOperationStatusData
): Promise<AxiosResponse<SuccessStatus>> => {
  return yandexHttpClient.get<SuccessStatus>(
    `https://cloud-api.yandex.net/v1/disk/operations/${data.operation_id}`,
    {
      params: {
        ...(data.fields && { fields: data.fields })
      },
    }
  );
};

export default {
  getUserDiskMeta,
  deleteResource,
  getResource,
  patchResource,
  putResource,
  postResourceCopy,
  getResourceDownload,
  getResourceFiles,
  getResourceLastUploaded,
  replaceResource,
  getPublishedResourceList,
  publishResource,
  unpublishResource,
  getResourceUploadLink,
  uploadResourceWithUrl,
  getPublicResourceMeta,
  getPublicResourceDownloadLink,
  saveResourceToDownloads,
  emptyBin,
  getBinResources,
  restoreBinResources,
  getAsyncOperationStatus,
} as YandexAPIType;