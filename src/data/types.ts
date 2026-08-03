export interface ReleaseAsset {
  name: string;
  size: number;
  downloads: number;
  url: string;
}

export interface Release {
  tag: string;
  name: string;
  prerelease: boolean;
  published: string;
  body: string;
  assets: ReleaseAsset[];
}

export interface ReleasesCache {
  fetched: string;
  stars: number;
  forks: number;
  releases: Release[];
}
