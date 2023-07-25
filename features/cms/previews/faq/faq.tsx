import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { FILE_NAME } from "features/cms/initialize/collections/lidoLanding/files/faq";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Wrapper, Text, Bold, Box } from "./faqStyles";

type Categories = {
  name?: string;
  "q&a"?: {
    question: string;
    answer: string;
  }[];
}[];

export const FaqPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const categories: Categories = entry.getIn(["data", "categories"]).toJS();

  return (
    <>
      {categories?.map((category) => (
        <Wrapper>
          <Text>
            <Bold>category name:</Bold> {category.name}
          </Text>
          {category["q&a"]?.map(({ question, answer }) => (
            <>
              <Box>
                <Text>question: {question}</Text>
                <Text>answer: {answer}</Text>
              </Box>
            </>
          ))}
        </Wrapper>
      ))}
    </>
  );
};

export const registerFaqPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    FILE_NAME,
    withStyledComponentsRendered(FaqPreview)
  );
};
