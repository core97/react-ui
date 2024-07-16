interface CardAsArticleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  as: "article";
}

interface CardAsSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  as: "section";
}

interface CardAsDivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  as: "div";
}

interface CardAsFormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  as: "form";
}

interface CardAsButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  as: "button";
}

export type CardProps =
  | CardAsArticleProps
  | CardAsSectionProps
  | CardAsDivProps
  | CardAsFormProps
  | CardAsButtonProps;
