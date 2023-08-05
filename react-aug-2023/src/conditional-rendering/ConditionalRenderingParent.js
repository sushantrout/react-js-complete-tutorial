import ConditionalRenderingChild from "./ConditionalRenderingChild";

export default function ConditionalRenderingParent() {
    return <>
        <ConditionalRenderingChild condition={false}></ConditionalRenderingChild>
        <ConditionalRenderingChild condition={true}></ConditionalRenderingChild>
    </>
}