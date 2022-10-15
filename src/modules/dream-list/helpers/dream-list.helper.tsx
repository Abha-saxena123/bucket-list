import { Typography } from "../../common/components/typography/typography";
import { FontType } from "../../common/utils/constants/typography.constants";
import { TabPanelProps } from "../types/dream-list.types";

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography fontType={FontType.COPY_LARGE_BOLD}>{children}</Typography>
      )}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
