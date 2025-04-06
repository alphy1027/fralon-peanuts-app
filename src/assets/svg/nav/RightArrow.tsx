import { twMerge } from "tailwind-merge";
type ArrowProps = {
  className?: string;
};
const RightArrow = ({ className }: ArrowProps) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      className={twMerge("fill-secondary", className)}
      d="M15.7385 16.08C15.628 16.183 15.5393 16.3072 15.4778 16.4452C15.4163 16.5832 15.3833 16.7322 15.3806 16.8832C15.3779 17.0343 15.4057 17.1843 15.4623 17.3244C15.5189 17.4645 15.6031 17.5918 15.7099 17.6986C15.8168 17.8054 15.944 17.8896 16.0841 17.9462C16.2242 18.0028 16.3742 18.0306 16.5253 18.0279C16.6763 18.0253 16.8253 17.9922 16.9633 17.9307C17.1013 17.8692 17.2255 17.7806 17.3285 17.67L22.2035 12.795L23 12L22.205 11.205L17.33 6.33003C17.1179 6.125 16.8338 6.01147 16.5388 6.01389C16.2438 6.01632 15.9616 6.1345 15.7529 6.34299C15.5443 6.55147 15.4258 6.83358 15.4231 7.12855C15.4204 7.42352 15.5337 7.70776 15.7385 7.92003L18.6935 10.875H3.125C2.82663 10.875 2.54048 10.9936 2.3295 11.2045C2.11853 11.4155 2 11.7017 2 12C2 12.2984 2.11853 12.5845 2.3295 12.7955C2.54048 13.0065 2.82663 13.125 3.125 13.125H18.6935L15.7385 16.08Z"
    />
  </svg>
);

export default RightArrow;
