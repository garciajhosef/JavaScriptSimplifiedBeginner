export default function addGlobalEventListener(
    type,
    selector,
    callback,
    capturing = false
) {
    document.addEventListener(
        type,
        (e) => {
            if (e.target.matches(selector)) callback(e);
        },
        capturing
    );
}
