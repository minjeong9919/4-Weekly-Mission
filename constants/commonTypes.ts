export interface CommonModalProps {
  isModalVisible: string;
  setIsModalVisible: React.Dispatch<React.SetStateAction<string>>;
}

export interface CommonFolderInfoProps {
  imageSource?: string;
  image_source?: string;
  createdAt?: Date | null;
  created_at?: Date | null;
  description: string;
  url: string;
  id: string;
  favorite: boolean;
}

export interface CommonButtonCustomProps {
  text?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  radius?: string;
  onBtnHandle?: () => void;
}

export type OwnerProps = {
  id: number;
  name: string;
  profileImageSource: string;
};
