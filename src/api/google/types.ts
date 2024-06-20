import { AxiosResponse } from "axios"

export type About = {
    name: string,
    quotaBytesTotal: string,
    quotaBytesUsed: string,
    quotaBytesUsedInTrash: string,
    largestChangeId: string,
    remainingChangeIds: string,
    rootFolderId: string,
    importFormats: [
      {
        source: string,
        targets: [
          string
        ]
      }
    ],
    exportFormats: [
      {
        source: string,
        targets: [
          string
        ]
      }
    ],
    additionalRoleInfo: [
      {
        type: string,
        roleSets: [
          {
            primaryRole: string,
            additionalRoles: [
              string
            ]
          }
        ]
      }
    ],
    features: [
      {
        featureName: string,
        featureRate: number
      }
    ],
    maxUploadSizes: [
      {
        type: string,
        size: string
      }
    ],
    domainSharingPolicy: string,
    kind: string,
    permissionId: string,
    isCurrentAppInstalled: boolean,
    quotaBytesUsedAggregate: string,
    user: User,
    etag: string,
    languageCode: string,
    selfLink: string,
    quotaType: string,
    folderColorPalette: [
      string
    ],
    driveThemes: [
      {
        id: string,
        backgroundImageLink: string,
        colorRgb: string
      }
    ],
    canCreateDrives: boolean,
    quotaBytesByService: [
      {
        serviceName: string,
        bytesUsed: string
      }
    ],
    teamDriveThemes: [
      {
        id: string,
        backgroundImageLink: string,
        colorRgb: string
      }
    ],
    canCreateTeamDrives: boolean
}

export type User = {
    displayName: string,
    kind: string,
    isAuthenticatedUser: boolean,
    permissionId: string,
    emailAddress: string,
    picture: {
        url: string
    }
}

export type List = {
  nextPageToken: string,
  kind: string,
  etag: string,
  selfLink: string,
  incompleteSearch: boolean,
  nextLink: string,
  items: Array<File>
}

export type File = {
  kind: string,
  userPermission: Permission,
  fileExtension: string,
  md5Checksum: string,
  selfLink: string,
  ownerNames: [
    string
  ],
  lastModifyingUserName: string,
  editable: boolean,
  writersCanShare: boolean,
  downloadUrl: string,
  mimeType: string,
  exportLinks: {
    string: string,
  },
  driveId: string,
  parents: Array<ParentReference>,
  thumbnailLink: string,
  appDataContents: boolean,
  webViewLink: string,
  iconLink: string,
  shared: boolean,
  lastModifyingUser: User,
  owners: Array<User>,
  openWithLinks: {
    string: string,
  },
  defaultOpenWithLink: string,
  headRevisionId: string,
  properties: Array<Property>,
  copyable: boolean,
  etag: string,
  sharingUser: User,
  alternateLink: string,
  embedLink: string,
  webContentLink: string,
  fileSize: string,
  copyRequiresWriterPermission: boolean,
  permissions: Array<Permission>,
  hasThumbnail: boolean,
  spaces: [
    string
  ],
  folderColorRgb: string,
  id: string,
  title: string,
  description: string,
  labels: {
    viewed: boolean,
    restricted: boolean,
    starred: boolean,
    hidden: boolean,
    trashed: boolean,
    modified: boolean
  },
  explicitlyTrashed: boolean,
  createdDate: string,
  modifiedDate: string,
  modifiedByMeDate: string,
  lastViewedByMeDate: string,
  markedViewedByMeDate: string,
  sharedWithMeDate: string,
  quotaBytesUsed: string,
  version: string,
  indexableText: {
    text: string
  },
  originalFilename: string,
  ownedByMe: boolean,
  canComment: boolean,
  shareable: boolean,
  fullFileExtension: string,
  isAppAuthorized: boolean,
  teamDriveId: string,
  capabilities: {
    canChangeRestrictedDownload: boolean,
    canMoveChildrenOutOfDrive: boolean,
    canReadDrive: boolean,
    canEdit: boolean,
    canCopy: boolean,
    canComment: boolean,
    canAddChildren: boolean,
    canDelete: boolean,
    canDownload: boolean,
    canListChildren: boolean,
    canRemoveChildren: boolean,
    canRename: boolean,
    canTrash: boolean,
    canReadRevisions: boolean,
    canReadTeamDrive: boolean,
    canMoveTeamDriveItem: boolean,
    canChangeCopyRequiresWriterPermission: boolean,
    canMoveItemIntoTeamDrive: boolean,
    canUntrash: boolean,
    canModifyContent: boolean,
    canMoveItemWithinTeamDrive: boolean,
    canMoveItemOutOfTeamDrive: boolean,
    canDeleteChildren: boolean,
    canMoveChildrenOutOfTeamDrive: boolean,
    canMoveChildrenWithinTeamDrive: boolean,
    canTrashChildren: boolean,
    canMoveItemOutOfDrive: boolean,
    canAddMyDriveParent: boolean,
    canRemoveMyDriveParent: boolean,
    canMoveItemWithinDrive: boolean,
    canShare: boolean,
    canMoveChildrenWithinDrive: boolean,
    canModifyContentRestriction: boolean,
    canAddFolderFromAnotherDrive: boolean,
    canChangeSecurityUpdateEnabled: boolean,
    canAcceptOwnership: boolean,
    canReadLabels: boolean,
    canModifyLabels: boolean,
    canModifyEditorContentRestriction: boolean,
    canModifyOwnerContentRestriction: boolean,
    canRemoveContentRestriction: boolean
  },
  hasAugmentedPermissions: boolean,
  trashingUser: User,
  canReadRevisions: boolean,
  thumbnailVersion: string,
  trashedDate: string,
  permissionIds: [
    string
  ],
  thumbnail: {
    image: string,
    mimeType: string
  },
  imageMediaMetadata: {
    flashUsed: boolean,
    meteringMode: string,
    sensor: string,
    exposureMode: string,
    colorSpace: string,
    whiteBalance: string,
    width: number,
    height: number,
    location: {
      latitude: number,
      longitude: number,
      altitude: number
    },
    rotation: number,
    date: string,
    cameraMake: string,
    cameraModel: string,
    exposureTime: number,
    aperture: number,
    focalLength: number,
    isoSpeed: number,
    exposureBias: number,
    maxApertureValue: number,
    subjectDistance: number,
    lens: string
  },
  videoMediaMetadata: {
    width: number,
    height: number,
    durationMillis: string
  },
  shortcutDetails: {
    targetId: string,
    targetMimeType: string,
    targetResourceKey: string
  },
  resourceKey: string,
  linkShareMetadata: {
    securityUpdateEligible: boolean,
    securityUpdateEnabled: boolean
  },
  sha1Checksum: string,
  sha256Checksum: string
}

export type Permission = {
  id: string,
  name: string,
  type: string,
  role: string,
  additionalRoles: [
    string
  ],
  authKey: string,
  value: string,
  kind: string,
  withLink: boolean,
  photoLink: string,
  selfLink: string,
  emailAddress: string,
  domain: string,
  etag: string,
  permissionDetails: [
    {
      permissionType: string,
      role: string,
      additionalRoles: [
        string
      ],
      inheritedFrom: string,
      inherited: boolean
    }
  ],
  expirationDate: string,
  teamDrivePermissionDetails: [
    {
      teamDrivePermissionType: string,
      role: string,
      additionalRoles: [
        string
      ],
      inheritedFrom: string,
      inherited: boolean
    }
  ],
  deleted: boolean,
  view: string,
  pendingOwner: boolean
}

export type ParentReference = {
  selfLink: string,
  id: string,
  isRoot: boolean,
  kind: string,
  parentLink: string
}

export type Property = {
  selfLink: string,
  value: string,
  visibility: string,
  kind: string,
  etag: string,
  key: string
}
export type GoogleAPIType = {
    getUserInfo(token: string): Promise<AxiosResponse<About>>;
    getResourceList(token: string): Promise<AxiosResponse<File>>;
}