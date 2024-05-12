import { useState, useEffect } from "react";
import { getFolderInfo } from "@/api/api";
import HeaderElement from "../components/common/HeaderElement";
import FooterElement from "../components/common/FooterElement";
import SharedSection from "../components/shared/SharedSection";
import Input from "../components/common/Input";
import FolderList from "../components/common/FolderList";
import { OwnerProps } from "@/constants/commonTypes";

export default function Shared() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [data, setData] = useState([]);
  const [folderName, setFolderName] = useState("");
  const [owner, setOwner] = useState<OwnerProps>({
    id: 0,
    name: "",
    profileImageSource: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFolderInfo();
        const { links, name, owner } = await response.folder;
        setOwner(owner);
        setFolderName(name);
        setData(links);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeaderElement $positionval="" />
      <SharedSection folderName={folderName} owner={owner} />
      <Input
        inputValue={searchInputValue}
        setInputValue={setSearchInputValue}
        onEnterButtonHandle={() => {}}
      />
      {data[0] ? (
        <FolderList
          items={data}
        />
      ) : null}
      <FooterElement />
    </>
  );
}
