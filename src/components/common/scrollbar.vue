<template></template>
<script>
export default {
  name: "ScrollBar"
};
</script>
<style>
/* scrollbar kustom */
body::-webkit-scrollbar {
  width: 8px;
}
body::-webkit-scrollbar-track {
  background-color: #efefef;
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #bfbfbf;
}
body::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
</style>
