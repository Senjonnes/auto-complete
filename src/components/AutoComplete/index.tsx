import React, { useEffect, useState } from "react";
import "./style.css";
import {
  AutoCompleteData,
  IAutoComplete,
} from "../../models/AutoComplete.model";

const AutoComplete: React.FC<IAutoComplete> = ({ hanleValue, dataSet }) => {
  const [inputData, setInputData] = useState<AutoCompleteData[]>(dataSet);
  const [value, setValue] = useState<string>("");
  const [response, setResponse] = useState<AutoCompleteData[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const handleChange = async (e: any): Promise<void> => {
    setValue(e?.target?.value);
    const filteredData = await inputData.filter((value: any) => {
      const searchStr = e?.target?.value?.toLowerCase();
      const nameMatches = value.name.toLowerCase().includes(searchStr);
      return nameMatches;
    });
    setResponse(filteredData);
    setShow(filteredData?.length ? true : false);
  };

  const getValue = (res: AutoCompleteData): void => {
    hanleValue(res);
    setShow(false);
  };

  useEffect(() => {
    setInputData(dataSet);
  }, [dataSet]);

  return (
    <div style={{ width: "30%" }}>
      <div
        className={
          show && value && response?.length
            ? "search-input active"
            : "search-input"
        }
      >
        <input
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Type to search..."
        />
        <div className="icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="autocom-box">
          {response?.map((res) => (
            <li onClick={() => getValue(res)} key={res?.value}>
              {res?.name?.split("")?.map((s, index) => {
                return value
                  ?.toLocaleLowerCase()
                  .includes(s.toLocaleLowerCase()) ? (
                  <span style={{ color: "red" }} key={index}>
                    {s}
                  </span>
                ) : (
                  <span key={index}>{s}</span>
                );
              })}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
