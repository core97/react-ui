export enum CardAs {
  article = "article",
  section = "section",
  div = "div",
  form = "form",
  button = "button",
}

interface CardAsArticleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  as: `${CardAs.article}`;
}

interface CardAsSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  as: `${CardAs.section}`;
}

interface CardAsDivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  as: `${CardAs.div}`;
}

interface CardAsFormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  as: `${CardAs.form}`;
}

interface CardAsButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  as: `${CardAs.button}`;
}

export type CardProps =
  | CardAsArticleProps
  | CardAsSectionProps
  | CardAsDivProps
  | CardAsFormProps
  | CardAsButtonProps;
