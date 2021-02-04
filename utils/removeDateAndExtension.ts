const removeDateAndExtension = (str) => str.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}_/, '');

export default removeDateAndExtension;
