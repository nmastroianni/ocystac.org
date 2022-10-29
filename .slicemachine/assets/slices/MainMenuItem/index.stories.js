import MyComponent from '../../../../slices/MainMenuItem';

export default {
  title: 'slices/MainMenuItem'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"linktext":"eye","linktarget":{"link_type":"Web","url":"https://slicemachine.dev"}},"slice_type":"main_menu_item","id":"_Default"}} />
_Default.storyName = ''

export const _MainMenuItemWithDropdown = () => <MyComponent slice={{"variation":"mainMenuItemWithDropdown","version":"sktwi1xtmkfgx8626","items":[{"linktext":"empty","linktarget":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"buttontext":"foot"},"slice_type":"main_menu_item","id":"_MainMenuItemWithDropdown"}} />
_MainMenuItemWithDropdown.storyName = ''
