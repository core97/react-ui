import { format, Locale } from "date-fns";
import { Text } from "../../../atoms/Text";
import { DatePickerValueProps } from "./DatePickerValue.types";
import styles from "./DatePickerValue.module.css";

const DATE_FORMAT = "d MMM yyyy";
const MAX_DATES_TO_SHOW = 1;

export const DatePickerValue = ({
  mode,
  selected,
  locale,
}: DatePickerValueProps) => {
  const localeParsed:
    | Pick<Locale, "localize" | "formatLong" | "options">
    | undefined =
    locale?.formatLong && locale.localize && locale.options
      ? {
          formatLong: locale.formatLong,
          localize: locale.localize,
          options: locale.options,
        }
      : undefined;

  if (mode === "multiple" && selected?.length) {
    return (
      <div className={styles.value_wrapper}>
        <Text as="span">
          {format(selected[0], DATE_FORMAT, { locale: localeParsed })}
        </Text>
        {selected.length > MAX_DATES_TO_SHOW && (
          <Text
            as="span"
            color="primary-500"
          >{`+ ${selected.length - MAX_DATES_TO_SHOW}`}</Text>
        )}
      </div>
    );
  }

  if (mode === "single" && selected?.length === 1) {
    return (
      <Text>{format(selected[0], DATE_FORMAT, { locale: localeParsed })}</Text>
    );
  }

  if (mode === "range" && selected?.length) {
    return selected[1] ? (
      <Text>{`${format(selected[0], DATE_FORMAT, { locale: localeParsed })} - ${format(selected[1], DATE_FORMAT, { locale: localeParsed })}`}</Text>
    ) : (
      <Text>{`${format(selected[0], DATE_FORMAT, { locale: localeParsed })}`}</Text>
    );
  }

  return null;
};
