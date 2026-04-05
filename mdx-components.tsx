import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900" {...props} />
  ),
  h3: (props) => <h3 className="mt-6 text-xl font-semibold text-slate-900" {...props} />,
  p: (props) => <p className="mt-4 leading-7 text-slate-700" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
