<template>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-analytics" />
        Navigation One
      </template>
      <MenuGroup title="Item 1">
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
      </MenuGroup>
      <MenuGroup title="Item 2">
        <MenuItem name="1-3">Option 3</MenuItem>
        <MenuItem name="1-4">Option 4</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: 'MyMenu'
}
</script>

<style scoped>

</style>
