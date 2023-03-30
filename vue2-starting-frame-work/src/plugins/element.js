import Vue from 'vue'
import { Button } from 'element-ui'
import { Form } from 'element-ui'
import { FormItem} from "element-ui";
import { Input } from "element-ui";
import { Message } from 'element-ui';
import { Container } from 'element-ui';
import { Header } from 'element-ui';
import { Main } from 'element-ui';
import { Aside } from 'element-ui';
import { Submenu } from 'element-ui';
import  { MenuItemGroup } from 'element-ui';
import  { MenuItem } from 'element-ui';
import  { Menu } from 'element-ui';
import { Table } from 'element-ui';
import { TableColumn } from 'element-ui';
import { Breadcrumb } from 'element-ui';
import { BreadcrumbItem } from 'element-ui';
import { Card } from 'element-ui';
import { Switch } from 'element-ui';
import { Tag } from 'element-ui';
import { Row } from 'element-ui';
import { Col } from 'element-ui';
import { Dialog } from 'element-ui';
import { MessageBox } from 'element-ui';
import { Badge } from 'element-ui';
import { Popover } from 'element-ui';
import { Notification } from 'element-ui';
import { Select } from 'element-ui';
import { Option } from 'element-ui';
import { Steps,Step } from 'element-ui';
import { Tabs, TabPane } from 'element-ui';
import { Alert } from 'element-ui';
import { Result } from 'element-ui';
import { Drawer } from 'element-ui';
import { Image } from 'element-ui';
import { Pagination } from 'element-ui';
import { Upload } from 'element-ui';
Vue.use(Upload)
Vue.use(Pagination) 
Vue.use(Result)
Vue.use(Image)
Vue.use(Drawer)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Option)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tag)
Vue.use(Switch)
Vue.use(Card)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.prototype.$Message = Message
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Badge)
Vue.use(Popover)