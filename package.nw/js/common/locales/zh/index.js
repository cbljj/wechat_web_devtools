module.exports = {
  APP_NEED_UPDATE: '已有新的版本 %s，正在下载更新，请稍后重启',
  APP_NEED_NOT_UPDATE: '当前已是最新版本（%s）',
  NETWORK_ERROR: '网络错误，状态码：%s',
  FILE_NOT_FOUND: '未找到入口 %s 文件，或者文件读取失败，请检查后重新编译。',
  JSON_PARSE_ERROR: '%s 文件解析错误',
  ENTRANCE_NOT_FOUND: '未找到入口页面\napp.json 中定义的 pages : %s',
  JSON_PAGE_WXML_NOT_EXISTS: '未找到 %s 中的定义的 %s "%s" 对应的 WXML 文件',
  JSON_PAGE_JS_NOT_EXISTS: '未找到 %s 中的定义的 %s "%s" 对应的 JS 文件',
  JSON_PAGE_FILE_NOT_EXISTS: '未找到 %s 中的定义的 %s "%s" 对应的 %s 文件',
  JSON_PAGE_SHOULD_NOT_IN_SUBPACKAGE: '%s 不应该在分包 %s 中',
  JSON_PLUGIN_SHOULD_NOT_IN_SUBPACKAGE: '%s 不应该在分包 %s 中',
  JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS_TITLE: 'app.json 或自定义编译条件错误',
  JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS: 'app.json 中未定义自定义编译中指定的启动页面 %s',
  JSON_ENTRY_PAGE_PATH_NOT_FOUND: '未在 %s 中找到 %s 定义的入口页面',
  JSON_TABBAR_SHOULD_BE_LIST: 'tabBar.list 应为数组',
  JSON_TABBAR_AT_LEAST: 'tabBar.list 需至少包含 %s 项',
  JSON_TABBAR_AT_MOST: 'tabBar.list 不能超过 %s 项',
  JSON_TABBAR_ITEM_OBJECT: 'tabBar.list[%s] 需为 Object',
  JSON_TABBAR_PATH_EMPTY: 'tabBar.list[%s].pagePath 不能为空',
  JSON_TABBAR_PATH_STRING: 'tabBar.list[%s].pagePath 需为 String',
  JSON_TABBAR_PATH_NOT_CONTAIN: `tabBar.list[%s].pagePath 不应该包含'%s'`,
  JSON_SHOULD_NOT_START_WITH: `%s 不应该以 '%s' 开头`,
  JSON_SHOULD_NOT_CONTAIN: '%s 不应该包含 %s',
  JSON_TABBAR_ICON_NOT_FOUND: `tabBar.list[%s].%s 文件不存在`,
  JSON_TABBAR_ICON_NOT_DIR: `tabBar.list[%s].%s 需为文件`,
  JSON_TABBAR_ICON_MAX_SIZE: `tabBar.list[%s].%s 大小超过 %skb`,
  JSON_TABBAR_ICON_EXT: `tabBar.list[%s].%s 文件格式错误，仅支持 %s 格式`,
  JSON_WIDGETS_EMPTY: '%s 的 widgets 字段为空',
  JSON_CONTENT_SHOULD_NOT_BE: '%s 不能为 %s',
  JSON_WIDGETS_ITEM_NOT_OBJECT: '%s 的 widgets[%s] 需为对象',
  JSON_WIDGETS_TYPE_INVALID: '%s 的 widgets[%s] 的 type 非法，有效值为[%s]',
  JSON_WIDGETS_NOT_ARRAY: '%s 中 widgets 字段需为数组',
  JSON_WIDGETS_TYPE_NOT_FOUND: '%s 的 widgets 字段缺少 type=%s 的项目',
  JSON_WIDGETS_PATH_NOT_FOUND: '%s 的 widgets[%s].path 找不到对应的路径',
  JSON_WIDGETS_PATH_SHOULD_BE_DIR: '%s 的 widgets[%s].path 需为目录',
  JSON_WIDGETS_JS_NOT_FOUND: '%s 的 widgets[%s].path 下未找到 %s',
  JSON_SUBPACKAGE_EXIST: 'app.json 中 %s 已经存在',
  JSON_CONTENT_EXISTED: '%s 已经存在',
  JSON_CONTENT_SHOULD_BE: '%s 字段需为 %s',
  JSON_CONTENT_NOT_FOUND: '%s 不存在',
  CLEAN_USER_AUTH_SUCCESS: '清除工具及手机授权数据成功',
  CLEAN_USER_AUTH_ERROR: '清除工具及手机授权数据失败 %s',
  CLEAN_USER_SESSION_SUCCESS: '清除登录状态成功',
  CLEAN_USER_SESSION_ERROR: '清除登录状态失败 %s',
  CLEAN_FILE_CACHE_SUCCESS: '清除文件存储成功',
  CLEAN_DATA_CACHE_SUCCESS: '清除数据存储成功',
  EXT_JSON_CONTENT_ERR: 'ext.json %s 字段需为 %s',
  LACK_OF_FILE: '缺少文件 %s',
  JSON_PAGES_REPEAT: '%s 中的 pages 字段 "%s" 重复',
  MENU_TITLE_APP: '微信开发者工具',
  MENU_TITLE_PROJECT: '项目',
  MENU_NEW_PROJECT: '新建项目',
  MENU_OPEN_RECENT_PROJECT: '打开最近项目',
  MENU_NEW_MINI_CODE: '新建代码片段',
  MENU_IMPORT_MINI_CODE: '导入代码片段',
  MENU_TITLE_FILE: '文件',
  MENU_TITLE_SETTINGS: '设置',
  MENU_TITLE_EDIT: '编辑',
  MENU_TITLE_FORWARD: '前进',
  MENU_TITLE_BACK: '后退',
  MENU_TITLE_LOCATION: '选中地址栏',
  MENU_TITLE_TOOLS: '工具',
  MENU_TITLE_WINDOW: '界面',
  MENU_ABOUT: '关于',
  MENU_CHECK_UPDATE: '检查更新',
  MENU_SWITCH_ACCOUNT: '切换帐号',
  MENU_INSPECT: '调试',
  MENU_INSPECT_APP: '调试微信开发者工具',
  MENU_INSPECT_EDITOR: '调试编辑器',
  MENU_INSPECT_GIT_MANAGER: '调试版本管理',
  MENU_EXIT: '退出',
  MENU_BBS: '开发者社区',
  MENU_SELECT_ALL: '全选',
  MENU_DOC: '开发者文档',
  MENU_SWITCH_DEV_MODE: '更换开发模式',
  MENU_WEB_DEV: '公众号网页调试',
  MENU_MINI_PROGRAM_DEV: '小程序调试',
  MENU_NEW_FILE: '新建文件',
  MENU_SAVE: '保存',
  MENU_SAVE_ALL: '保存所有',
  MENU_CLOSE_FILE: '关闭文件',
  MENU_PROJECTS: '查看所有项目',
  MENU_CLOSE_PROJECT: '关闭当前项目',
  MENU_APPEARANCE_SETTINGS: '外观设置',
  MENU_EDIT_SETTINGS: '编辑设置',
  MENU_SHORTCUT_SETTINGS: '快捷键设置',
  MENU_PROXY_SETTINGS: '代理设置',
  MENU_NOTIFICATION_SETTINGS: '通知设置',
  MENU_PROJECT_SETTINGS: '项目设置',
  MENU_UNDO: '撤销',
  MENU_REDO: '重做',
  MENU_COPY: '复制',
  MENU_PASTE: '粘贴',
  MENU_CUT: '剪切',
  MENU_UNINDENT: '左缩进',
  MENU_INDENT: '右缩进',
  MENU_FORMAT_CODE: '格式化代码',
  MENU_MOVE_LINES_UP: '代码上移一行',
  MENU_MOVE_LINES_DOWN: '代码下移一行',
  MENU_COPY_LINES_UP: '复制并向上粘贴',
  MENU_COPY_LINES_DOWN: '复制并向下粘贴',
  MENU_FIND: '搜索',
  MENU_FIND_IN_FILES: '全局搜索',
  MENU_REPLACE: '替换',
  MENU_GOTO_FILE: '跳转到文件',
  MENU_GOTO_RECENT: '跳转到最近文件',
  MENU_GOTO_PREVIOUS_EDITOR: '上一个编辑器',
  MENU_GOTO_NEXT_EDITOR: '下一个编辑器',
  MENU_BUILD: '编译',
  MENU_REFRESH: '刷新',
  MENU_NORMAL_BUILD: '普通编译',
  MENU_NEW_CUSTOM_BUILD: '新增编译条件',
  MENU_BUILD_SETTINGS: '编译配置',
  MENU_SIMULATOR_TOGGLE_FOREGROUND_BACKGROUND: '前后台切换',
  MENU_CLEAR_CACHE: '清除缓存',
  MENU_CLEAR_FILE_CACHE: '清除文件缓存',
  MENU_CLEAR_AUTH_CACHE: '清除授权数据',
  MENU_CLEAR_STORAGE_CACHE: '清除数据缓存',
  MENU_CLEAR_SESSION: '清除登录状态',
  MENU_CLEAR_WEBVIEW_CACHE: '清除网络缓存',
  MENU_CLEAR_ALL: '全部清除',
  MENU_MULTI_ACCOUNT: '多帐号调试',
  MENU_COLLAPSE_ALL: '收起所有组',

  MENU_PREVIEW: '预览',
  MENU_UPLOAD: '上传',
  MENU_CUSTOM_ANALYSIS: '自定义分析',
  MENU_AUTO_TEST: '自动化测试',
  MENU_PROJECT_DETAILS: '项目详情',
  MENU_SIMULATOR: '模拟器',
  MENU_EDITOR: '编辑器',
  MENU_FILE_TREE: '目录树',
  MENU_DEVTOOLS: '调试器',
  MENU_TOOLBAR: '工具栏',
  MENU_MOVE_SIMULATOR_LEFT: '左移模拟器',
  MENU_MOVE_SIMULATOR_RIGHT: '右移模拟器',
  MENU_COS: '素材管理',
  MENU_TOOLS_MGR: '工具栏管理',
  MENU_TGIT: '代码仓库',
  MENU_TOGGLE_LOCK_WINDOW_SIZE: '开启或关闭窗口大小锁定',
  MENU_LANGUAGE_SETTINGS: '语言设置',
  MENU_SYSTEM_LANGUAGE: '系统语言',
  SETTING_LANGUAGE: '语言：',


  SETTING_THEME: '配色：',
  SETTING_THEME_DARK: '深色主题',
  SETTING_THEME_WHITE: '浅色主题',
  SETTING_MINIMAP: '代码缩略图',
  SETTING_FONT_FAMILY: '字体：',
  SETTING_FONT_SIZE: '字号：',
  SETTING_LINE_SPACING: '行距',
  SETTING_FILE_SAVE: '文件保存',
  SETTING_AUTO_SAVE: '修改文件时自动保存',
  SETTING_SAVE_BEFORE_COMPILE: '编译时自动保存所有文件',
  SETTING_COMPILE_ON_SAVE: '保存时自动编译小程序',
  SETTING_EDITOR: '编辑器：',
  SETTING_WRAP: '自动折行',
  SETTING_TAB_TO_SPACES: '用空格代替 Tab',
  SETTING_TAB_SIZE: 'Tab 大小：',
  SETTING_PROXY_SETTING: '代理设置',
  SETTING_PROXY_NONE: '不使用任何代理，勾选后直连网络',
  SETTING_PROXY_SYSTEM: '使用系统代理',
  SETTING_PROXY_USER: '手动设置代理',
  SETTING_PROXY_ADDRESS: '代理地址',
  SETTING_PROXY_PORT: '端口',
  SETTING_NOTIFICATION_SETTING: '通知设置',
  SETTING_NOTIFICATION_ENABLE_SYSTEM: '允许系统消息通知',
  SETTING_NOTIFICATION_ENABLE_BBS: '允许开发社区消息通知',
  SETTING_NOTIFICATION_ENABLE_ALARM: '允许监控报警消息',

  // confirm
  CONFIRM_OPEN_IN_THIS_WINDOW_TITLE: '打开项目',
  CONFIRM_OPEN_IN_THIS_WINDOW_CONTENT: '是否要在当前窗口打开项目：%s',

  // alert
  ALERT_TOURIST_FORBIDDEN_TITLE: '错误',
  ALERT_TOURIST_FORBIDDEN_CONTENT: '游客模式无法使用本功能',

  // CGI
  CGI_ERR_NEED_RELOGIN: '需要重新登录',
  CGI_ERR_NOT_BAND: '登录用户不是该小程序的开发者',
  CGI_ERR_NEED_ADMIN: '需要管理员权限才能操作',
  CGI_ERR_NEED_UPDATE: '当前版本太旧，请升级工具',
  CGI_ERR_NEED_SCAN_CODE: '需要扫码确认',
  CGI_ERR_EMPTY_SOURCE: '上传的源码包为空',
  CGI_ERR_SOURCE_MAX_LIMIT: '源码包超出最大限制',
  CGI_ERR_WXPKG_MAX_LIMIT: '编译后的包超出最大限制',
  CGI_ERR_INVALID_WXPKG: '无效的代码包',
  CGI_ERR_WXML_FAIL: 'wxml 编译错误，错误信息：%s',
  CGI_ERR_WXSS_FAIL: 'wxss 编译错误，错误信息：%s',
  CGI_ERR_INVALID_FILE: '非法的文件，错误信息：%s',
  CGI_ERR_INVALID_JSON: '无效的 json 文件：%s',
  CGI_ERR_LACK_OF_FILE: '缺少文件, %s',
  CGI_ERR_BIND_NOT_24H: '当前开发者绑定时间不足 24 小时，请过后重试',
  CGI_ERR_PLATFORM_NOT_BAND: '未绑定为第三方平台的开发小程序',
  CGI_ERR_NOT_LIMITS: '未绑定网页开发者',
  CGI_ERR_NOT_LIMITS_QY: '未绑定企业号开发者',
  CGI_ERR_NOT_DEV_LIMIT: '操作过于频繁，请十分钟后再试',
  CGI_ERR_PLATFORM_INVALID_EXT_APPID: '不合法的 extAppid',
  CGI_ERR_PLATFORM_EXT_APPID_NOT_AUTH: 'extAppid 没有授权',
  CGI_ERR_OAUTH_NOT_SUPPORT: '暂不支持当前 URL 的 Oauth 调试支持',
  CGI_ERR_NO_PERMISSION: '没有权限',
  CGI_ERR_SYSTEM_ERROR: '系统错误，错误码：%s',
  CGI_ERR_DEV_INVALID_APPID: 'AppID 不合法',
  CGI_ERR_DEV_CLOUD_CALLBACK_ERR: '%s，通知腾讯云发生错误',
  CGI_ERR_DEV_CLOUD_INVALID_ACTION: '腾讯云非法操作请求',
  CGI_ERR_DEV_CLOUD_EVENT_EXPIRED: '操作腾讯云请求超时',
  CGI_ERR_DEV_CLOUD_NO_PERMISSION: '非小程序管理员，没有权限操作腾讯云',
  CGI_ERR_DEV_CLOUD_NO_PRODUCT_ENV: '未开通腾讯现网环境，请先开通',
  CGI_ERR_DEV_CLOUD_NO_CLOUD_ACCOUNT: '未开通腾讯云帐号',
  CGI_ERR_DEV_CLOUD_INVALID_RESP_DATA: '腾讯云返回非法数据',
  CGI_ERR_USER_CAN_NOT_ACCESS_APP: '插件未授权使用',
  CGI_ERR_APP_NOT_EXIST: '插件 provider 不存在',
  CGI_ERR_APP_VERSION_NOT_EXIST: '插件版本不存在',
  CGI_ERR_DEV_CLOUD_NO_DEVELOP_ENV: '未开通测试环境',
  CGI_ERR_DEV_CLOUD_NO_AUTH: '未授权腾讯云',
  CGI_ERR_DEV_INVALID_PLUGIN_VERSION: '非法的插件版本',
  CGI_ERR_DEV_PLUGIN_NOT_FOUND: '找不到使用的插件',
  CGI_ERR_DEV_DEVPLUGIN_NOT_DEFINED: '开发版插件未定义在 app.json 中',
  CGI_ERR_DEV_PLUGIN_ROOT_NOT_DEFINED: '插件目录未定义在 project.config.json 中',
  CGI_ERR_DEV_TWO_SAME_PLUGIN_FOUND: '使用了同一个插件的不同版本',
  CGI_ERR_DEV_COMPILE_SOURCE_MAX_LIMIT_SUBPKG: '分包大小超过限制',
  CGI_ERR_DEV_PLUGIN_NOT_INITTED: '插件未初始化',
  CGI_ERR_DEV_CLOUD_NO_TGIT_PROJECT: '未开通 TGit',

  API_NOT_SUPPORT: '开发者工具暂时不支持此 API 调试，请使用真机进行开发',
  API_NOT_ALLOW: '没有权限',
  API_USER_CANCEL: '用户拒绝授权',
  CODE_SIZE_EXCEED: '代码包大小为 %s kb，上限为 %s kb，请删除文件后重试',
  CREATE_PROJECT_TIP_NO_NAME: '请填写 项目名称',
  CREATE_PROJECT_TIP_NO_DIR: '请选择 项目目录',
  CREATE_PROJECT_TIP_NO_APPID: '请填写 appid ',
  CREATE_PROJECT_TIP_HASH_EXIST: '已存在 %s %s 项目，请重新输入',
  CREATE_PROJECT_TIP_MUST_USE_EMPTY_FOLDER: '请选择空目录',
  CREATE_PROJECT_TIP_MUST_CHOOSE_FOLDER: '创建临时目录失败，请选择一个目录',
  CREATE_PROJECT_TIP_MUST_USE_VALID_MINI_APP_FOLDER: '请选择空目录或含 app.json / project.config.json 的目录创建项目',

  PROJECT_PLUGIN_VERSION_WARNING: '插件版本警告',
  PROJECT_PLUGIN_VERSION_UNMATCHED_WITH_VERSION_USED_IN_ONLINE_MINI_PROGRAM: '请注意，插件 %s 当前选择的版本 (%s) 小于线上小程序使用的版本 (%s)',

  // ===== QCLOUD =====

  CLOUD_ACTION_UPLOAD: '上传测试代码',
  CLOUD_ACTION_DEPLOY_DEV: '部署开发环境',
  CLOUD_ACTION_DEBUG: '启动单步调试',
  CLOUD_ACTION_INSTALL_DEPENDENCE: '安装依赖',
  CLOUD_ACTION_RESTART_SERVICE: '重启服务',
  CLOUD_ACTION_STOP_SERVICE: '停止服务',
  CLOUD_ACTION_RESET_SERVICE: '恢复开发环境',
  CLOUD_ACTION_UPLOAD_IDC: '上传正式代码',
  CLOUD_ACTION_GOTO_MANAGE_PAGE: '前往管理中心',
  CLOUD_ACTION_RESET_ENV: '重置开发环境',

  QCLOUD_DEPLOY_DEV_BEGIN_TITLE: '开始部署',
  QCLOUD_DEPLOY_DEV_BEGIN_CONTENT: '开始部署至腾讯云开发环境',
  QCLOUD_DEPLOY_DEV_SUCCESS_TITLE: '环境部署成功',
  QCLOUD_DEPLOY_DEV_SUCCESS_CONTENT: '成功部署至腾讯云开发环境',
  QCLOUD_DEPLOY_DEV_FAIL_TITLE: '部署到开发环境失败',
  QCLOUD_DEPLOY_DEV_NEED_UPLOAD: '请先上传代码',

  QCLOUD_DEPLOY_PRODUCT_BEGIN_TITLE: '开始部署',
  QCLOUD_DEPLOY_PRODUCT_BEGIN_CONTENT: '开始部署至腾讯云生产环境',
  QCLOUD_DEPLOY_PRODUCT_SUCCESS_TITLE: '部署成功',
  QCLOUD_DEPLOY_PRODUCT_SUCCESS_CONTENT: '成功部署至腾讯云生产环境',

  QCLOUD_RESET_SERVICE_BEGIN_TITLE: '开始重置',
  QCLOUD_RESET_SERVICE_BEGIN_CONTENT: '开始重置开发环境',
  QCLOUD_RESET_SERVICE_SUCCESS_TITLE: '重置成功',
  QCLOUD_RESET_SERVICE_SUCCESS_CONTENT: '成功重置开发环境',

  QCLOUD_INSTALL_DEP_BEGIN_TITLE: '开始安装依赖',
  QCLOUD_INSTALL_DEP_BEGIN_CONTENT: '开始安装依赖',
  QCLOUD_INSTALL_DEP_SUCCESS_TITLE: '安装依赖完成',
  QCLOUD_INSTALL_DEP_SUCCESS_CONTENT: '依赖安装成功',

  QCLOUD_DEBUG_BEGIN_CONTENT: '完成后会自动打开调试窗口',

  QCLOUD_RESTART_SERVICE_BEGIN_TITLE: '开始重启服务',
  QCLOUD_RESTART_SERVICE_BEGIN_CONTENT: '开始重启腾讯云服务',
  QCLOUD_RESTART_SERVICE_SUCCESS_TITLE: '重启成功',
  QCLOUD_RESTART_SERVICE_SUCCESS_CONTENT: '重启腾讯云服务成功',

  QCLOUD_STOP_SERVICE_BEGIN_TITLE: '开始停止服务',
  QCLOUD_STOP_SERVICE_BEGIN_CONTENT: '开始停止腾讯云服务',
  QCLOUD_STOP_SERVICE_SUCCESS_TITLE: '停止服务成功',
  QCLOUD_STOP_SERVICE_SUCCESS_CONTENT: '停止腾讯云服务成功',

  QCLOUD_UPLOAD_SUCCESS_TITLE: '上传成功',
  QCLOUD_UPLOAD_FAIL_TITLE: '上传至腾讯云失败',

  QCLOUD_WATING_TIP_UPLOADING: '上传中，请等待...',
  QCLOUD_WATING_TIP_INSTALLINIG: '依赖安装中，请等待...',
  QCLOUD_WATING_TIP_DEPLOYING: '环境部署中，请等待...',
  QCLOUD_WATING_TIP_RESTARTING: '重启中，请等待...',

  QCLOUD_SUCCESS_TIP_UPLOAD: '%s 代码上传成功',
  QCLOUD_SUCCESS_TIP_DEPLOY: '%s 环境部署成功',
  QCLOUD_SUCCESS_TIP_INSTALL: '%s 依赖安装成功',
  QCLOUD_SUCCESS_TIP_RESTART: '%s 重启成功',

  // CLI
  CLI_BAD_REQUEST: '请求错误',
  CLI_BAD_NETWORK: '网络错误，请检查网络设置',
  CLI_NEED_LOGIN: '需要重新登录',
  CLI_NEED_PROJECTPATH: '需要提供项目路径',
  CLI_NEED_VERSION: '需要版本号',
  CLI_FORMAT_NOT_SUPPORT: '二维码不支持输出 %s 格式',
  CLI_QR_PATH_NOT_VALID_OR_NOT_EXIST: '二维码输出路径无效或不存在 %s',
  CLI_INFO_PATH_NOT_VALID_OR_NOT_EXIST: 'info output 输出路径无效或不存在 %s',
  CLI_PROJECT_CONFIG_JSON_NOT_VALID_OR_NOT_EXIST: '请检查是否 project.config.json 是否存在及是否有效',
  CLI_NOT_FOUND_IN_PROJECT_CONFIG_JSON: 'project.config.json 中缺少了 %s',
  CLI_APPID_NOT_BOUND: '当前开发者未绑定此 AppID ，请到小程序管理后台操作后重试',
  CLI_INVALID_APPID: '不存在此 AppID 请检查后重新输入',
  CLI_GET_APP_INFO_ERROR: '获取应用信息错误，错误码 %s',
  CLI_QR_OUTDATED: '二维码超时，请重试',
  CLI_LOGIN_RETRY: '登录错误，请重试',
  CLI_DUPLICATE_PROJECT_ID: '已存在相同 AppID 和 projectname 的项目（路径），请修改后重试',
  CLI_GENERIC_ERROR: '错误 %s',


  WIDGET_SERVER_DEBUG: '服务器调试信息',
  WIDGET_NETWORK_ERROR: '网络错误',
  WIDGET_GET_SEARCH_RESULT_ERROR: '获取搜索数据失败:%s，请更换搜索条件后重试',
  WIDGET_GET_SEARCH_QUERY_ERROR: '获取搜索默认查询条件失败:%s',
  WIDGET_IMAGE_SIZE_ERROR: '图片超过大小限制',
  WIDGET_IMAGE_SIZE_ERROR_TIP: '在非 wifi 环境下，30 分钟内图片大小不能超过 %s kb',
  WIDGET_IF_WANT_TO_JUMP: '是否跳转到小程序开发模式？',
  RESOURCE_RELATIVE_TIPS_TITLE: '项目资源引用错误',
  RESOURCE_RELATIVE_TIPS_CONTENT: '项目资源 %s 与页面不在同一个分包中导致无法正常加载',
  RESOURCE_SUBPACKAGE_TIPS: '项目资源 %s 所在的分包尚未加载',

  NO_NETWORK_TIPS_TITLE: '无网络状态模拟',
  NO_NETWORK_TIPS_CONTENT: '已开启无网络状态模拟，网络请求 %s 已被阻止；在模拟器工具栏切换网络状态，可恢复网络请求。',

  FILE_NOT_UTF8: '%s 文件不是 UTF-8 格式',

  PROJECT_JSON_VALUE_NO_FOUND: 'project.config.json 未找到 %s 字段',

  SEM_VER_MAJOR: '版本升级',
  SEM_VER_MINOR: '特性更新',
  SEM_VER_PATCH: '修订补丁',

  // Common
  CONFIRM: '确定',
  CANCEL: '取消',
  UNKNOWN_TIME: '未知时间',
  UNKNOWN_USER: '未知用户',
  MINI_PROGRAM_DEV_ASSISTANT: '小程序开发助手',
  CLICK_FOR_DETAIL: '点击查看详情',
  COPY_QR_CODE: '复制二维码',
  EXCEPTION_INFORMATION: '提示信息',
  NONE: '无',
  EXCEPTION_FOUND: '提示：',
  EXPIRE_AT_SOME_TIME: '时失效',
  UNKNOWN_ERR: '未知错误',
  NETWORK_ERR: '网络连接失败',
  HELP: '帮助',
  PROJECT: '项目',
  CODE_SEGMENT: '代码片段',
  DOC_URL: '文档链接',
  REGISTER: '注册',
  MINI_PROGRAM: '小程序',
  DYNAMIC_PAGE: '动态页',
  SEARCH_PAGE: '搜索页',
  MINI_GAME: '小游戏',
  PLUGIN: '插件',
  SYSTEM_ERROR: '系统错误',
  PROJECT_NAME: '项目名称',
  PROJECT_DESCRIPTION: '项目描述',
  PROJECT_DIRECTORY: '项目目录',
  SESSION_DYNAMIC_PAGE: '会话动态页',
  TEMPORARY_DIRECTORY: '临时目录',
  STORAGE_DIRECTORY: '存放目录',

  // Account box
  ACCOUNT_BOX_EMPTY: '暂无可用测试号，',
  ACCOUNT_BOX_ADD: '添加',
  ACCOUNT_BOX_RE_LOGIN: '重新登录',
  ACCOUNT_BOX_LOGON_EXPIRED: '登录态已失效',
  ACCOUNT_BOX_TITLE: '选择你要登录的测试号，用于多帐号调试',
  ACCOUNT_BOX_TEST_ACCOUNT: '测试帐号',
  ACCOUNT_BOX_LOGIN: '登录',
  ACCOUNT_BOX_ADD_TITLE: '添加测试号',
  ACCOUNT_BOX_ADD_MSG: '请使用微信扫描二维码登录',
  ACCOUNT_BOX_ADD_ERR_MSG: '该帐号已经登录，请使用其他微信号',

  // Toolbar
  TOOLBAR_MINI_PROGRAM_MODE: '小程序模式',
  TOOLBAR_SEARCH_DYNAMIC_PAGE: '搜索动态页',
  TOOLBAR_PLUG_IN_MODE: '插件模式',
  TOOLBAR_MINI_GAME_MODE: '小游戏模式',
  TOOLBAR_ORDINARY_COMPILATION: '普通编译',
  TOOLBAR_ADD_COMPILATION_MODE: '添加编译模式',
  TOOLBAR_QR_CODE_COMPILATION: '通过二维码编译',
  TOOLBAR_UPLOAD: '上传',
  TOOLBAR_BBS: '社区',
  TOOLBAR_SOURCE_CONTROL: '版本管理',
  TOOLBAR_TEST: '测试',
  TOOLBAR_CLOUD: '云开发',
  TOOLBAR_MATERIAL_MANAGEMENT: '素材管理',
  TOOLBAR_CODE_REPOSITORY: '代码仓库',
  TOOLBAR_TENCENT_CLOUD: '腾讯云',
  TOOLBAR_DETAILS: '详情',
  TOOLBAR_SWITCH_TO_FOREGROUND: '切前台',
  TOOLBAR_SWITCH_TO_BACKGROUND: '切后台',
  TOOLBAR_CLEAR_CACHE: '清缓存',
  TOOLBAR_ERROR_TITLE: '错误',
  TOOLBAR_QCLOUD_CONFIRM_TITLE: '未授权腾讯云',
  TOOLBAR_QCLOUD_CONFIRM_CONTENT: '当前 AppID %s 未授权给腾讯云，点击确定查看文档',
  TOOLBAR_SIMULATOR: '模拟器',
  TOOLBAR_EDITOR: '编辑器',
  TOOLBAR_DEBUGGER: '调试器',
  TOOLBAR_COMPILE: '编译',
  TOOLBAR_PREVIEW: '预览',
  TOOLBAR_REMOTE_DEBUG: '真机调试',
  TOOLBAR_TEST_ACCOUNT: '测试号',
  TOOLBAR_QCLOUD_UPLOAD: '上传',
  TOOLBAR_QCLOUD_DEBUG: '准备单步调试',
  TOOLBAR_QCLOUD_DEPLOY_DEV: '部署到测试环境',
  TOOLBAR_QCLOUD_DEPLOY_PRODUCT: '部署到正式环境',
  TOOLBAR_QCLOUD_INSTALL_DEPENDENCE: '安装依赖',
  TOOLBAR_QCLOUD_RESET_SERVICE: '恢复开发环境',
  TOOLBAR_QCLOUD_RESTART_SERVICE: '重启服务',
  TOOLBAR_QCLOUD_STOP_SERVICE: '停止服务',
  TOOLBAR_QCLOUD_UPLOAD_IDC: '上传正式代码',
  TOOLBAR_QCLOUD_ERROR: '正在%s中，请等待操作完成',
  TOOLBAR_REMOTE_DEBUG_ERROR: '请先结束其他真机调试。',
  TOOLBAR_CONFIGLIST_ONLY_ICON: '只显示图标',
  TOOLBAR_CONFIGLIST_DEFAULT: '图标与文字说明',
  TOOLBAR_ICON_MANAGER_TITLE: '自定义工具管理',

  AUTO_PREVIEW: '自动预览',
  QR_CODE_REMOTE_DEBUG: '扫描二维码真机调试',
  QR_CODE_PREVIEW: '扫描二维码预览',
  PREVIEW_QR_CODE_TITLE: '%s 于 %s 上传',
  PREVIEW_QR_CODE_ERR: '自动预览错误：',
  PREVIEW_QR_CODE_TIP1: '请保持微信 %s 在手机前台运行',
  PREVIEW_QR_CODE_TIP2: '自动预览时项目将自动刷新在微信上',
  PREVIEW_QR_CODE_TIP3: '仅支持 6.6.7 及以上版本微信客户端',
  PREVIEW_QR_CODE_TIP4: '仅支持 %s 平台 %s 及以上版本微信客户端',
  PREVIEW_QR_CODE_TIP4_SHORT: '%s 平台 %s 及以上版本微信客户端',
  PREVIEW_QR_CODE_TIP_SHORTCUT: '预览快捷键：%s',
  PREVIEW_MSG_FILE_IGNORED: '忽略上传的文件',
  PREVIEW_MSG_NOT_UPLOAD_FILES: '以下文件没有上传。',
  PREVIEW_MSG_BIG_FILE: '体积过大的文件',
  PREVIEW_MSG_BIG_FILE_DETAILS: '以下文件体积超过 500KB，已跳过压缩以及 ES6 转 ES5 的处理。',

  CONSOLE_PREPROCESS_START: '开始执行自定义预览前预处理命令...',
  CONSOLE_PREPROCESS_ERROR: '执行自定义预览前预处理命令失败!',
  CONSOLE_PREPROCESS_RUNNING: '正在执行自定义预览前命令...',
  CONSOLE_PREPROCESS_SUCCESS: '自定义预览前命令执行完毕',
  CONSOLE_COPY_SUCCESS: '复制成功',

  COMPILE_CONDITION_ERR: '解析二维码失败',
  COMPILE_CONDITION_ERR_WITH_DETAIL: '解析二维码失败：%s',
  COMPILE_CONDITION_APPID_ERR: '解析二维码失败：非本 AppID 的小程序码',
  COMPILE_CONDITION_PROGRAM_ERR: '解析二维码失败：非小程序码',
  COMPILE_EXCEPTION: '编译提示：',
  COMPILE_AND_PREVIEW: '编译并预览',

  REMOTE_DEBUG_END: '已结束，请重新开始',
  REMOTE_DEBUG_NOT_UNINITIALIZED: '未初始化',
  REMOTE_DEBUG_NOT_CONNECTED: '未连接',
  REMOTE_DEBUG_LOGOUT: '已登出',
  REMOTE_DEBUG_LOGINING: '正在登陆',
  REMOTE_DEBUG_WAIT_SERVICE: '等待设备',
  REMOTE_DEBUG_SERVER_BLOCKING: '服务器阻塞',
  REMOTE_DEBUG_WAITING_FOR_RESPONSE: '等待回包',
  REMOTE_DEBUG_WORK_CORRECTLY: '正常',
  REMOTE_DEBUG_UNKNOWN: '未知',

  QCLOUD_SVR_NO_FOUND_ERR: '未找到腾讯机器',
  QCLOUD_SVR_POLL_TIMEOUT: '%s 请求超时',
  QCLOUD_SVR_POLL_DOING: '请等待上次 %s 结果',
  QCLOUD_SVR_ACTION_ERR: '%s 错误',
  QCLOUD_WAIT_UPLOAD_ERR1: '上次上传尚未完成，请等待上传结果通知',
  QCLOUD_WAIT_UPLOAD_ERR2: '正在上传中，请等待上次上传结束',
  QCLOUD_AUTO_DEPLOY_SUCCESS: '已完成',
  QCLOUD_DROPDOWN_ENV_HEADER: '当前环境 %s',

  LOGIN_WELCOME: '欢迎使用微信开发者工具',
  LOGIN_QR_CODE_SUCCESS: '扫描成功',
  LOGIN_QR_CODE_EXPIRED: '二维码过期',
  LOGIN_QR_CODE_REFRESH: '请手动刷新',
  LOGIN_QR_CODE_OCCUPIED_ERROR: '登录二维码正被终端或 HTTP 服务占用，如需终止，点此刷新',
  LOGIN_QR_CODE_NETWORK_SUBTITLE: '请检查网络设置，然后手动刷新',
  MINI_PROGRAM_PROJECT: '小程序项目',
  MINI_PROGRAM_PROJECT_DEBUG: '编辑、调试小程序',
  OFFICIAL_WEB: '公众号网页项目',
  OFFICIAL_WEB_DEBUG: '调试公众号网页',
  MINI_PROGRAM_DEV_DOC: '小程序开发文档',
  MINI_PROGRAM_DEV_BBS: '小程序开发社区',
  CODE_SEGMENT_DETAIL: '代码片段是一种可分享的小项目',
  CODE_SEGMENT_MANAGE: '管理代码片段',
  CODE_SEGMENT_NEW: '新建',
  CODE_SEGMENT_IMPORT: '导入',
  PROJECT_MANAGE: '管理项目',
  PROJECT_NEW: '新增',
  PROJECT_DELETE_TITLE: '确认删除项目 %s',
  PROJECT_DELETE_CONTENT: '删除项目只会删除记录，不会删除硬盘上的项目文件',

  TEMPLATE_WEAPP: '建立普通快速启动模板',
  TEMPLATE_WX_CLOUD_WEAPP: '建立云开发快速启动模板',
  TEMPLATE_PLUGIN: '建立插件快速启动模板',
  TEMPLATE_QCLOUD_NODEJS: '建立腾讯云 Node.js 启动模板',
  TEMPLATE_QCLOUD_PHP: '建立腾讯云 PHP 启动模板',
  TEMPLATE_GAME: '建立游戏快速启动模板',
  TEMPLATE_WX_CLOUD_GAME: '建立云开发游戏快速启动模板',
  TEMPLATE_QCLOUD_NODEJS_GAME: '建立腾讯云 Node.js 游戏启动模板',
  TEMPLATE_QCLOUD_PHP_GAME: '建立腾讯云 PHP 游戏启动模板',
  APPID_BOUND_ERR: '当前开发者未绑定此 AppID ，请到小程序管理后台操作后重试',
  APPID_EXIST_ERR: '不存在此 AppID 请检查后重新输入或使用无 AppID 模式',
  MINI_PROGRAM_LIMIT_FUNCTION: '无小程序 AppID 部分功能受限',
  MINI_GAME_LIMIT_FUNCTION: '无小游戏 AppID 部分功能受限',
  FILL_MINI_PROGRAM_APPID: '填写小程序AppID ',
  RETURN_TO_FILL_APPID: '返回填写 AppID',
  NO_APPID: '无 AppID ',
  OR_USE_TEST_ACCOUNT: '或使用测试号:',
  OR_EXPERIENCE: '或体验：',
  MINI_PROGRAM_PROJECT_MANAGE: '小程序项目管理',
  CLICK_TO_FILL_APPID: '点此返回填写 AppID',
  IF_NO_APPID: '若无 AppID 可',

  CODE_LINK: '代码链接',
  ENTER_INBOUND_LINK: '请输入导入链接',
  LINK_ID_NOT_EXIST: '链接 / ID 不存在',
  CODE_PACKAGE_CORRUPTED: '代码包文件损坏，请重试',
  CODE_PACKAGE_EXTRACT_FAIL: '代码包解压到文件夹失败，请重试，失败原因：%s',
  CODE_SEGMENT_CREATE: '创建代码片段',
  CODE_SEGMENT_NAME: '代码片段名称',
  CODE_SEGMENT_DIRECTORY: '代码片段目录',
  CODE_SEGMENT_DESCRIPTION: '代码片段描述',
  CODE_SEGMENT_IMPORT_LONG: '导入代码片段',
  CODE_SEGMENT_IMPORT_DETAIL: '填写代码片段链接即可导入代码片段',
  USE_TEST_ACCOUNT: '使用测试号：',
  SHARER_FILL_APPID: '选填，分享者建议填入 AppID',
  PART_INTERFACE_NEED_APPID: '选填，部分接口和功能需要 AppID 才能使用',

  DEBUG: '调试',
  DEBUGGER: '调试器',
  CURRENT_VERSION: '当前版本',
  LATEST_VERSION: '最新版本',
  PLUGIN_INFORMATION: '插件信息',
  VALID_DOMAIN_NAME: '合法域名',
  BUSINESS_DOMAIN_NAME: '业务域名',
  NOT_SET: '未设置',
  MAIN_PACKAGE: '主包',
  OPEN: '打开',
  COPY: '复制',
  MODIFY: '修改',
  CLOSE: '关闭',
  SHARE: '分享',
  UPLOAD: '上传',
  DELETE: '删除',
  LOCAL_DIRECTORY: '本地目录',
  FILE_SYSTEM: '文件系统',
  LOCAL_CODE: '本地代码',
  SOURCE_LINK: '来源链接',
  PROJECT_SETTINGS: '项目设置',
  DOMAIN_INFORMATION: '域名信息',
  PLATFORM_NAME: '平台名',
  DOMAIN_NAME: '域名',
  RUNNING: '运行中',
  HALTED: '停止中',
  SWITCH_LANGUAGE: '切换语言',
  CLOUD_SERVICE_STATUS: '云服务状态',
  TENCENT_CLOUD_STATUS: '腾讯云状态',
  MINI_PROGRAM_TENCENT_CLOUD_STATUS: '小程序腾讯云状态',
  AUTHORIZED_TENCENT_CLOUD: '已授权腾讯云',
  UNAUTHORIZED_TENCENT_CLOUD: '未授权腾讯云',
  LASTEST_VERSION_EXTRA_INFO: ' - 最新',
  PLUGINS_POSTFIX: '%s 个插件',
  PLUGINS_UPDATE_INFO: '%s 个插件有更新',
  LOCAL_SUBPACKAGE_CODE_SIZE: '本地分包代码大小',
  LAST_PREVIEW_SUBPACKAGE_SIZE: '上次预览分包代码大小',
  LAST_UPLOAD_SUBPACKAGE_SIZE: '上次上传分包代码大小',
  DEVELOPMENT_ENVIRONMENT: '开发环境',
  PRODUCTION_ENVIRONMENT: '生产环境',
  DEVELOPMENT_ENVIRONMENT_INFORMATION: '开发环境信息',
  PRODUCTION_ENVIRONMENT_INFORMATION: '生产环境信息',
  OPEN_DEVELOPMENT_ENVIRONMENT: '已开通开发环境',
  CLOSE_DEVELOPMENT_ENVIRONMENT: '未开通开发环境',
  OPEN_PRODUCTION_ENVIRONMENT: '已开通生产环境',
  CLOSE_PRODUCTION_ENVIRONMENT: '未开通生产环境',
  LAST_PREVIEW: '上次预览',
  LAST_UPLOAD: '上次上传',
  LAST_SHARE: '上次分享',
  LAST_DEPLOY_TIME: '上次部署时间',
  SERVICE_START_TIME: '服务启动时间',
  SERVICE_STOP_TIME: '服务停止时间',
  USER_RATIO: '用户占比%s',
  ES6_TO_ES5: 'ES6 转 ES5',
  MIN_VER_BASE_LIB: '线上最低基础库',
  VIEW_USER_BASE_LIB: '查看用户基础库分布',
  DEBUG_BASE_LIB: '调试基础库',
  CHECK_NETWORK_CONNECTION: '请检查网络连接',
  LOAD_PUBLIC_LIB: '正在加载公共库',
  AUTOCOMPLETED_WHEN_UPLOADING: '上传代码时样式自动补全',
  AUTO_COMPRESSED_WHEN_UPLOADING: '上传代码时自动压缩混淆',
  ENABLE_CUSTOM_PROCESSING: '启用自定义处理命令',
  PRE_COMPILATION_PREPROCESSING: '编译前预处理',
  PRE_PREVIEW_PREPROCESSING: '预览前预处理',
  PRE_UPLOAD_PREPROCESSING: '上传前预处理',
  NOT_VERIFY_VALIDITY: '不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书',
  NEW_FEATURE_SOURCEMAP: '预览/上传时使用新特性(携带sourcemap)',
  ENABLE_MULTI_CORE_COMPILATION: '启动多核心编译',

  PAGE_PATH: '页面路径',
  SCENE_VALUE: '场景值',
  PAGE_PARAMETERS: '页面参数',
  PAGE_INFORMATION: '页面信息',
  EMPTY: '空',

  MODE_NAME: '模式名称',
  STARTUP_PAGE: '启动页面',
  STARTUP_PARAMETERS: '启动参数',
  ENTER_SCENE: '进入场景',
  PARSE_ERROR: '解析错误',
  MUST_BE_OBJECT: '需为 Object',
  CUSTOM_COMPILATION_CONDITION: '自定义编译条件',
  SELECT_DEFAULT_PAGE: '请选择进入页面，默认为首页',
  FOR_EXAMPLE: '如',
  DEFAULT: '默认',
  SELECT_GROUP: '选择进入的群',
  PLEASE_SELECT: '请选择',
  STARTED_APPID: '启动的 AppId',
  SET: '设置',
  SIMULATION_UPDATE_AT_COMPILE_DETAIL: '下次编译时模拟更新 (需 %s 及以上基础库版本)',
  DELETE_THIS_MODE: '删除该模式',
  SERVICE_CATEGORY: '服务类别',
  QUERY_CRITERIA: '查询条件',
  TEST_SERVER: '测试服务器',
  TEST_SERVER_ADDRESS: '请填写测试服务器地址',
  CUSTOM_SEARCH: '自定义搜索',
  SET_TITLE: '设置标题',
  PATH_AND_PARAMETERS: '路径及参数',

  WIDTH: '宽度',
  HEIGHT: '高度',
  NAME: '名字',
  ADD_CUSTOM_SCREEN: '添加自定义屏幕',

  TOOL_REMINDER: '工具提醒',
  SYSTEM_NOTIFICATION: '系统通知',
  COMMUNITY_NOTIFICATION: '社区通知',
  TENCENT_CLOUD_NOTIFICATION: '腾讯云通知',
  MONITORING_NOTIFICATION: '监控通知',
  NOT_LOGGED: '未登录',
  UPDATE_FILE_NOT_EXIST: '更新文件不存在，请重新下载',
  PERSONAL_CENTER: '个人中心',
  NO_NEW_MESSAGES: '暂无新消息',
  UPDATE_IMMEDIATELY: '立即更新',
  GO_TO_VIEW: '前往查看',

  UPLOADING: '上传中',
  PLUG_IN_DOC_UPLOAD: '插件文档上传成功',
  UPLOAD_ERROR_DETAIL: '上传错误，原因：%s',
  UPLOAD_DETAIL: '%s 在 %s 提交上传',
  VERSION_NUMBER: '版本号',
  PLUG_IN_VERSION_FORMAT: '数字.数字.数字 格式，每个数字最大为 999。如 %s',
  ONLY_LETTER_NUMBER_DOT: '仅限字母、数字、.',
  NOTE: '备注',
  EXECUTE_PREPROCESSOR_UPLOAD: '正在执行自定义上传前命令...',
  UPLOAD_BIG_SIZE_DETAILS: '以下文件体积超过 500KB，已经跳过压缩以及 ES6 转 ES5 处理，如在该文件有使用到 ES6 特性，请使用其它工具转换成 ES5 或压缩，否则可能会在低版本设备上运行有风险：%s',
  FILES_NOT_PACKAGED_UPLOADED: '以下文件没有被打包上传：%s',
  CODES_UPLOAD_SUCCEEDED: '上传代码成功',
  LASTEST_VERSION_NUMBER: '最新版本号',
  UPDATE_TYPE: '更新类型',
  RECOMMENDATION: '推荐',
  PROJECT_NOTES: '项目备注',
  LEARN_MORE: '了解更多',

  RE_CREATE_PROJECT_CONFIG: 'project.config.json 文件可能损坏。是否重新创建此文件？',
  PLUG_IN_VERSION_LOWER: '插件 %s 当前选择的版本 (%s) 小于线上小程序使用的版本 (%s)，是否继续',
  UPLOAD_PLUG_IN_CONTINUE: '正在上传插件代码，是否继续？',
  OVERWRITE_TRIAL_VERSION: '上次提交已被选为体验版，本次上传将会覆盖体验版，是否继续？',
  SET_UPLOAD_TRIAL_VERSION: '上传成功后，需要联系管理员在小程序管理后台将本次上传设置为体验版本.',

  UPLOAD_MATERIAL: '上传素材',
  DONE: '完成',
  RUNNING_TASK_TRY_AGAIN: '当前有上传任务正在进行，请稍候重试',
  UPLOADING_LONG: '正在上传......',
  TIP: '提示',
  QCLOUD_CDN_NOT_OPEN: '未开通腾讯云 CDN 服务，请前往开通',
  OPEN_SERVICE: '前往开通',
  FILE_IGNORE_REASON: '%s 因 %s 被忽略',
  PACKAGING_SIZE: '正在打包 %s 大小 %sB ......',
  PROCESSING_TIME_CONSUME: '正在处理，耗时%ss ......',
  UPLOAD_FAIL_TRY_AGAIN: '上传失败，请稍候重试',
  UPLOAD_SUCCESSFULLY: '上传成功',
  TASK_TIMEOUT_TRY_AGAIN: '任务超时，请稍候重试',
  NO_MATERIAL_UPLOADED: '暂未上传任何素材',
  SUPPORTED_FILE_FORMATS: '支持的文件类型',
  UPLOAD_FILES: '上传文件',
  CREATION_TIME: '创建时间',
  UPLOAD_SIZE_LIMIT: '单个文件最大限制 2 MB，单次上传 zip 包最大限制 10 MB',

  MUSIC_PLAYER: '音乐播放器',
  PLAYING: '正在播放',
  WXWORK_SCAN_QR_CODE: '可使用企业微信扫码预览',
  GENERATE_SHARED_LINK: '生成分享链接',
  GENERATING: '生成中',
  CONTENT_VIOLATE_RE_EDIT: '名称和描述不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑',
  SHARE_FAIL_DETAIL: '分享错误，原因：%s',
  SHARE_OPTIONAL_DESCRIPTION: '选填，便于开发者了解此代码用途',
  NEED_APPID_TO_RUN: '是否需要填写 AppID 才能完整运行项目',
  SHARE_APPID_YES: '需要',
  SHARE_APPID_NO: '不需要',
  MINIMUM_LIBRARY_VERSION: '最低库版本',
  COPY_LINK: '复制链接',
  SETTINGS: '设置',
  APPEARANCE: '外观',
  EDIT: '编辑',
  HOT_KEY: '快捷键',
  PROXY: '代理',
  NOTIFICATION: '通知',
  SPACE: '空格',
  SHOW_HIDE: '界面开关',
  PREVIEW_AND_AUTO: '预览 (自动预览)',
  JUMP_TO_FILE: '跳转文件',
  RECENT_FILE: '最近文件',
  RESET: '恢复默认',
  COMPLIE_ON_MANUAL_SAVING: '将在手动保存时编译',
  OPEN_FILE_NEW_TAB: '总是在新标签页打开文件',
  GIT_IGNORE_WIN_RETURN: 'Git 比较文件内容时，<br />忽略 Windows 风格回车符',
  SIMULATOR_WINDOW_TITLE: '%s的模拟器',
  DEBUGGER_WINDOW_TITLE: '%s的模拟器',
  PROJECT_CONFIG_READ_ERROR: '读取 project.config.json 文件失败。',
  PROJECT_CONFIG_PARSE_ERROR: '解析 project.config.json 文件失败，请检查其内容或删除此文件。',
  PROJECT_CONFIG_CONTENT_ERROR: '解析 project.config.json 文件失败，%s',
  SET_PROXY_ERROR: '设置代理失败',
  SET_PROXY_ERROR_MSG: '代理设置失败，请检查重试',
  APPLY: '申请',
  APPLICANT: '申请人',
  APPLICATION_TIME: '申请时间',
  GENERATING_REPORT: '报告生成中',
  TEST_TIMEOUT: '测试超时',
  TEST_REPORT: '测试报告',
  APPLY_TEST_REPORT_24_HOUR: '24小时可以申请一次测试报告',
  START_APPLY_TEST: '开始申请测试',
  TEST_APPLICATION_SUCCESSFUL: '测试申请成功',
  APPLY_UNSUCCESSFULLY_REASON: '测试申请失败，原因：',
  APPLY_AUTO_TEST_ERR_REASON: '自动化测试申请失败，错误信息：',
  CUSTOM_SEARCH_NOT_SUPPORT: '暂不支持自定义搜索，请使用条件编译',
  SEARCH: '搜索',
  SEARCH_DATA_EMPTY: '获取到的搜索结果为空，请重新选择搜索条件后重试',
  FAIL_DYNAMIC_PAGE_DATA: '获取动态页数据失败:',
  MINI_PROGRAM_INNER_PAGE_TITLE: '小程序内页标题',
  QUERY_RESULTS: '查询结果',
  PROVIDED_BY: '由%s提供',
  SESSION: '会话',
  NETWORK_STATUS_CODES: '网络状态码',
  RETURN: '返回',
  TAKE_TIME: '耗时',
  FORWARD: '转发',
  RETURN_HOME_PAGE: '回到首页',
  CUR_PAGE_NO_SHARE: '当前页面未设置分享',

  NEW_CONTACT: '新建联系人',
  BASIC_INFORMATION: '基本信息',
  NICK_NAME: '昵称',
  LAST_NAME: '姓氏',
  MIDDLE_NAME: '中间名',
  FIRST_NAME: '名字',
  REMARK: '备注',
  MOBILE_PHONE_NUMBER: '手机号',
  WE_CHAT_NUMBER: '微信号',
  ADDRESS: '联系地址',
  COUNTRY: '国家',
  STATE: '省份',
  CITY: '城市',
  STREET: '街道',
  POSTAL_CODE: '邮政编码',
  WORK: '工作',
  ORGANIZATION: '公司',
  TITLE: '职位',
  WORK_FAX_NUMBER: '工作传真',
  WORK_PHONE_NUMBER: '工作电话',
  HOST_NUMBER: '公司电话',
  EMAIL: '电子邮件',
  SITE: '网站',
  WORK_ADDRESS: '工作地址',
  FAX_NUMBER: '传真',
  HOME: '住宅',
  WECHAT_AUTHORIZATION: '微信授权',
  APPLY_PERMISSION: '%s 申请获得以下权限',
  AUTHORIZATION_REFUSE: '拒绝',
  AUTHORIZATION_PERMIT: '允许',
  FIND_SCENE_VALUE: '查找场景值',
  WRONG_CARD: '错误的卡券',
  ADD_CARD: '添加卡券',
  RECEIVED_CARD: '领取到卡包',
  CARDS_LIST: '卡券列表',
  VIEW_DETAILS: '查看详情',
  VALID_PERIOD: '有效期：%s-%s',
  CHOOSE_ADDRESS: '选择地址',
  NAME_PLACEHORDER: '张三',
  ADDRESS_PLACEHORDER: '广东省广州市海珠区新港中路397号',
  PROVINCE_PLACEHOLDER: '广东省',
  CITY_PLACEHOLDER: '广州市',
  COUNTY_PLACEHOLDER: '海珠区',
  ADDRESS_DETAIL_PLACEHOLDER: '新港中路397号',
  COMPANY_ADDRESS_PLACEHORDER: '广州市海珠区新港中路397号自编72号(商业街F5-1)',
  BANKNAME_PLACEHORDER: '招商银行股份有限公司广州市体育东路支行',
  CHOOSE_INVOICE_TITLE: '选择发票抬头',
  GUANGZHOU_TENCENT: '广州腾讯科技有限公司',
  INSTITUTIONS: '单位',
  RESUME_SCRIPT_EXECUTION: '继续执行脚本',
  STEP_OVER: '单步跳过',
  GROUPLIST_100_PEOPLE: '100人',
  CHOOSE_A_CHAT: '请选择一个聊天',
  RECENT_CHATS: '最近聊天',
  CHOOSE_LOCATION: '选择位置',
  WECHAT_PAYMENT: '微信支付',
  WECHAT_QR_PAYMENT_DEBUG: '请用开发者本人微信（%s）扫描以上二维码进行支付调试',
  SETTING: '设置',
  PERMIT_USE_MY: '允许“%s”使用我的',
  SEND: '发送',
  SEND_TO: '发送给：',
  CUSTOM: '自定义',
  STATUS_BAR_HEIGHT: '状态栏高度',
  MORE_DEVICE_FOOTNOTE: '只适用于 Android，Android 状态栏高度默认 25dp，iOS 状态栏高度固定 20dp，请在此填写您的 Android 测试机型的状态栏高度',
  STATUS_BAR_HEIGHT_LIMIT: '状态栏高度必须大于 0 小于 50',
  MINI_PROGRAM_CONSUME_TIMING: '小程序重启耗时过久，请确认业务逻辑中是否有复杂运算，或者死循环',
  FILE_READ_ERROR: '%s 文件读取错误',
  FILE_PARSE_ERROR: '%s 文件解析错误',
  FILE_CONTENT_ERROR: '%s 文件内容错误',
  FILE_ERROR: '%s 文件错误',
  GENERATING_ERROR: '%s 生成错误',
  FILE_COMPILE_ERROR: '%s 文件编译错误',
  TRANSPILE_ERROR: '%s 转换错误',
  FAILED_UNPACK_CODE_PACKAGE: '代码包解包失败',
  RENDER_LAYER_ERROR: '渲染层错误',
  WXSS_IMAGE_ERROR: '%s 中的本地资源图片无法通过 WXSS 获取，可以使用网络图片，或者 base64，或者使用<image/>标签。请参考文档：%s',
  NETWORK_LAYER_RENDER_LAYER_ERROR: '渲染层网络层错误',
  TOOL_LOADING_ERROR: '工具加载错误',
  ERROR: '错误',
  NETWORK_PROXY_SOLUTIONS: '因为网络代理软件或者 VPN 影响，工具无法加载本地模拟开发服务 %s 请尝试以下任一解决方案\n1.关闭相关网络代理软件，重新编译成功后，再启动相关网络代理软件；\n2.配置相关软件不针对 *.appservice.open.weixin.qq.com 和 *.debug.open.weixin.qq.com 进行代理；\n3.配置相关软件不针对 开发者工具 做代理。',

  PLUG_IN_UPDATE_PROMPTS: '插件更新提示',
  PLUG_IN_UPDATE_DETAIL: '插件 %s 有更新，当前使用的版本为 %s，最新版本为 %s',
  COMMUNITY_RELATED_POST_RECOMMENDATION: '社区相关帖子推荐',
  DOCUMENT_RECOMMENDATION: '文档推荐',
  ARTICLE_RECOMMENDS: '文章推荐',
  EMBED_WARNINGS: '警告',
  EMBED_ERRORS: '报错',
  INFO_DISPLAY_ORIGINAL_INFORMATION: '原%s信息',
  INFO_DISPLAY_MORE_INFORMATION: '关于上述%s，点击查看更多信息：%s',
  ERROR_VERIFY_VALID_DOMAIN: '合法域名校验出错',
  UPDATE_DOMAIN_RECOMPILE_PROJECT: '如若已在管理后台更新域名配置，请刷新项目配置后重新编译项目，操作路径：“详情-域名信息',
  NOT_IN_VALID_DOMAIN_LIST: '%s 不在以下 %s 合法域名列表中，请参考文档：%s',
  RECORDING_FILE_FORMAT_DESCRIPTION: '录音文件格式说明',
  RECORDING_FILE_FORMAT_DIFF: '开发者工具上的录音文件与移动端格式不同，暂时只可在工具上进行播放调试，无法直接播放或者在客户端上播放',
  TURN_OFF_VERIFY_VALIDITY: '配置中关闭 合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书检查',
  TOOL_NOT_VERIFY_VALIDITY: '工具未校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书。',
  PULL_CONFIGURE_SUCCESSFULLY: '配置拉取成功',
  EVENT: '事件',
  EVENT_NAME: '事件名',
  EVENT_INFORMATION: '事件信息',
  ACTION: '动作',
  TRIGGERING_CONDITIONS: '触发条件：',
  FIELD_VALUE: '字段值',
  REPORT_DATA: '上报数据：',
  RECEIVE_LATEST_CONFIGURATION: '收到最新配置',
  REPORT_SUCCESS: '上报成功',
  DATA: '数据',
  CUSTOM_ANALYSIS: '自定义分析',

  PAGE_DATA: '页面的初始数据',
  LIFECYCLE_FUNCTION: '生命周期函数',
  PAGE_ONLOAD: '监听页面加载',
  PAGE_ONREADY: '监听页面初次渲染完成',
  PAGE_ONSHOW: '监听页面显示',
  PAGE_ONHIDE: '监听页面隐藏',
  PAGE_ONUNLOAD: '监听页面卸载',
  PAGE_EVENT_HANDLER_FUNCTION: '页面相关事件处理函数',
  PAGE_ONPULLDOWNREFRESH: '监听用户下拉动作',
  PAGE_ONREACHBOTTOM: '页面上拉触底事件的处理函数',
  PAGE_ONSHAREAPPMESSAGE: '用户点击右上角分享',
  COMPONENT_PROPERTIES: '组件的属性列表',
  COMPONENT_DATA: '组件的初始数据',
  COMPONENT_METHODS: '组件的方法列表',

  REMOTE_DEVICE_INFORMATION: '远程设备信息',
  DATA_LINE_REMOTE_DEBUG: '数据线（%s）',
  OTHER: '其他',
  NORMAL: '正常',
  PER_SECOND: ' 个/秒',
  MOBILE_PHONE_MODEL: '手机型号',
  OPERATING_SYSTEM: '运行系统',
  WECHAT_VERSION: '微信版本',
  BASE_LIBRARY_VERSION: '基础库版本',
  ROUND_TRIP_TIME: '往返耗时',
  CONNECTION_MODE: '连接方式',
  CONNECTION_INFORMATION: '连接信息',
  CONNECTION_STATUS: '连接状态',
  CONNECTION_CLOSED: '已结束',
  SERVICE_STATE: '服务状态',
  NETWORK_SEND: '已发送',
  RECEIVED: '已接收',
  TRAFFIC: '流量',
  COMPRESSION_SAVING: '压缩节省',
  RECEIVE_MESSAGES: '收到信息',
  SEND_MESSAGES: '发出信息',
  SEND_RATE: '发送效率',
  RECEIVE_RATE: '接收效率',
  WAIT_FOR_SENDING: '等待发送',
  UNCONFIRMED: '未确认',
  SENT_PACKAGE: '发出包',
  RECEIVED_PACKAGE: '收到包',
  WARNINGS_AND_ERRORS: '警告和错误',
  CONNECTION_BROKEN_RECONNECT: '连接断开，是否重连？',
  RECONNECT: '重新连接',
  REMOTE_DEBUG_TYPE: '类型：',
  REMOTE_DEBUG_DETAILS: '详情：',
  USE_TOOL_END_STORAGE: '使用工具端的 Storage',
  TAKE_EFFECTS_NEXT_DEBUGGING: '下次调试生效',
  NODE_INSPECTION_MODE: '节点审查模式',
  STOP_DEBUGGING: '结束调试',
  RECEIVE_INVALID_MESSAGE: '收到非法消息',
  RECEIVED_BROKEN_MESSAGE: '收到消息损坏',
  SENDING_BROKEN_MESSAGE: '发送消息损坏',
  SENDING_INVALID_MESSAGE: '发送非法消息',
  TOO_MANY_ACCUMULATED_REQUESTS: '积累消息过多',
  SERVER_IS_BUSY: '服务器忙碌',
  SERVER_RESUME: '服务器恢复正常',
  SERVER_ERROR: '服务器错误',
  DEBUGGING_HAS_RECOVERD: '已恢复调试',
  DEBUGGING_HAS_RESTARTED: '已重新开始调试',
  DEBUGGING_HAS_FINISHED: '调试已结束',
  INTERNAL_EXCEPTION: '内部异常',
  RECEIVE_ERROR_CODE: '收到错误代码',
  NETWORK_OR_LOGIN_ERROR: '网络或登录错误',

  DEBUG_QCLOUD: '调试腾讯云',
  QCLOUD_UPLOAD: '上传腾讯云',
  MINIMIZE: '最小化',
  GOT_IT: '知道了',
  QCLOUD_UPLOAD_WAITING: '因开发网上传速度受限，预计需时 %ss，请等待上传完成通知',
  QCLOUD_SET_VERSION_NUMBER: '合理设置版本号便于管理，只能输入字母、数字、. 如v1.0.0',
  QCLOUD_REMARK_DETAIL: '可以备注项目版本优化内容等，便于管理员识别',
  QCLOUD_CHOOSE_UPLOAD: '选择上传模式',
  QCLOUD_UPLOAD_CHANGED_CODE: '推荐使用，仅对变化的代码进行上传',
  INTELLIGENT_UPLOAD: '智能上传',
  MODULE_UPLOAD: '模块上传',
  NORMAL_UPLOAD: '普通上传',
  QCLOUD_SEPARATELY_UPLOAD: '可分别上传 node_modules 及以外的代码',
  QCLOUD_UPLOAD_EXCEPT_NODE_MODULES: '上传 node_modules 以外代码',
  QCLOUD_UPLOAD_NODE_MODULES: '上传 node_modules 代码',
  AUTO_INSTALL_DEPENDENCIES_DEPLOY: '部署后自动安装依赖',
  CHOOSE_PRODUCTION_ENVIRONMENT: '选择开发环境',
  CHOOSE_ENVIRONMENT_ERROR: '选择环境错误',
  INCLUDES: '包括',

  CLEAR_ALL_SUCCESSFULLY: '清除全部成功',
  CLEAR_NETWORK_CACHE_SUCCESSFULLY: '清除网络缓存成功',
  TGIT_NOT_OPEN_DETAIL: '未开通 TGit 服务，请查看文档，前往开通',
  READ_DOCUMENTATION: '查看文档',
  CDN_NOT_OPEN_DETAIL: '未开通腾讯云 CDN 服务，请查看文档，前往开通',
  TLS_VERSION_REQUIRED: '小程序要求的 TLS 版本必须大于等于 1.2',
  GETUSERINFO_NOT_SUPPORTED: '获取用户信息接口后续将不再支持，请注意升级',
  CONTINUE_USE: '继续使用',
  ALLOW_AUTO_FILLING: '是否允许自动填写',
  GET_DATA_ERROR: '获取数据错误',
  USER_NOT_BOUND_PHONE: '用户未绑定手机，请先在微信客户端进行绑定后重试',
  PHONE_BOUND_NEED_VERIFIED: '用户绑定的手机需要进行验证，请在客户端完成短信验证步骤',
  APPID_NO_PERMISSIONS: '该 appid 没有权限',
  WX_LOGIN_FIRST: '请先使用 wx.login 登录',
  GET_PHONE_NUMBER_ERROR: '获取手机号失败',
  ALLOW_OBTAIN_OPERATION_PERMISSION: '希望获取 %s 的操作权限，是否允许？',

  USER_NOT_OPEN_WECHAT_MOVEMENT: '用户未开启微信运动，请在微信客户端开启',
  GETUSERINFO_NOT_AUTHORIZED_WINDOW: '获取用户信息接口后续将不再出现授权弹窗，请注意升级',
  BLUETOOTH_DEBUG_SUPPORT: '目前蓝牙调试功能暂不支持 Mac 以外的平台',
  BLUETOOTH_INITIALIZE: '请先调用 wx.openBluetoothAdapter 接口进行初始化操作',
  CALL_ONLY_SIMULATION: '拨打 %s?【仅为模拟】',
  APPLICATION_RESTARTING: '应用重启中',
  WAIT_TIMEOUT_TRY_AGAIN: '等待超时，请重试',
  RECORDING_DEVICE_ERROR: '未找到或者无权限调用录音设备',

  COMPLING_OTHER_FILES: '正在编译其他文件',
  OTHER_FILES_COMPILATION_COMPLETED: '编译其他文件完成',
  PROCESSING: '正在处理 %s',
  GAME_KEYBOARD_DONE: '完成',
  GAME_KEYBOARD_SEARCH: '搜索',
  GAME_KEYBOARD_NEXT: '下一个',
  GAME_KEYBOARD_GO: '前往',
  GAME_KEYBOARD_SEND: '发送',
  WEBCAST: '直播',
  BARRAGE: '弹幕',
  COMPILE_ERROR_POSTFIX: '编译 %s 文件出错',
  OR: '或',
  DIRECTORY_SETTING_NOT_LEGAL: '%s 设置不合法，必须为项目目录中的一个子目录。',
  STRING_TYPE: 'String 类型',
  COMPILE_ERROR_PREFIX: '%s 编译错误',
  NOT_FOUND: '%s 未找到',

  SEND_FRIENDS: '发送给朋友',
  SHARE_MOMENTS: '分享到朋友圈',
  OPEN_BROWSER: '在浏览器中打开',
  AN_ERROR_OCCURRED: '出现错误',
  MY_CARDS: '我的卡券',
  NO_CARDS_ADDED: '暂无可添加的卡券',
  OFFICIAL_ACCOUNT_SIMULATOR: '公众号模拟器',
  OFFICIAL_ACCOUNT_DEBUGGER: '公众号调试器',
  FRIENDS_CIRCLE: '朋友圈',
  FRIEND: '朋友',
  CLEAR_DEVELOPER_TOOL_COOKIE: '清除开发者工具cookie',
  CLEAR_DEVELOPER_TOOL_CACHE: '清除开发者工具缓存',
  CLEAR_ADDRESS_BAR_HISTORY: '清除地址栏历史记录',
  SIMULATED_DEBUG_RESULT: '只是一个模拟调试的结果',
  NO_SDK_SUPPORTED: '没有此SDK或暂不支持此SDK模拟',
  LINK: '链接',

  SCRIPT_ERROR_OR_INCORRECTLY_CALL: '%s 出现脚本错误或者未正确调用 %s',
  CHECKING_FILE: '正在检查文件',
  FILE_CHECK_COMPLETED: '检查文件完成',
  COMPILING_JS_FILE: '正在编译 JS 文件',
  JS_COMPILATION_COMPLETED: '编译 JS 文件完成',
  SEGMENT_CODE_SIZE_MAXIMUM: '代码片段代码包大小上限为 %s KB，当前代码包大小为 %s KB',
  COMPILING_CODE: '正在编译代码',
  COMPARING_FILE_LIST: '正在对比文件列表',
  CODE_COMPILATION_COMPLETED: '编译代码完成',
  PACKING: '正在打包',
  PACK_COMPLETED: '打包完成',
  UPLOAD_COMPLETED: '上传完成',
  PLEASE_CHOOSE_PLUGIN_MODE: '如果正在开发插件，请选择插件模式',
  TRIPLE_NUMBER_DOT: '数字.数字.数字',
  PLUGINS_MULTI_PROVIDER: 'plugins 中存在多个 provider:%s',
  ALREADY_EXISTS: '已存在',
  SUBDIRECTORY: '的子目录',
  DIRECTORY: '目录',
  NEED_IN_PAGE_ARRAY: '需在 pages 数组中',
  ASTERISK_NOT_MATCH: '%s 中 * 的个数不匹配',
  PLUGIN_NOT_SUPPORT_ASTERISK: '%s 插件不支持 *',
  SAME_KEY_PAGE_PUBLICCOMPONENTS: 'pages 与 publicComponents 不能存在相同的 key:%s',

  UNKNOWN_UPLOAD_RESULT: '未知上传结果',
  IMAGE: '图片',
  MULTIMEDIA: '多媒体',
  AUDIO: '音频',
  VIDEO: '视频',
  VECTOR_GRAPHICS: '矢量图形',
  FILE_SIZE_TOO_BIG: '文件大小 %sB 大于最大限制 %sMB',
  NON_WHITELIST_FILE: '非白名单文件',
  DATA_PACKAGE_SIZE_TOO_BIG: '数据包 %sB 大于最大限制 %sMB',
  EXECUTE_PREPROCESSOR_BEFORE_COMPILE: '正在执行自定义编译前命令...',
  OPERATE_TOO_FAST_PREPROCESSOR_COMPILE: '操作太快了，正在执行自定义编译前命令...',
  CANNOT_BE_FOUND: '未找到 %s 文件',
  PARSEERR_MSG_FILE: '插件: %s 版本: %s 文件:%s',
  PARSEERR_ENTRANCE_PAGE_ERROR: '未找到入口页面\napp.json 中定义的 pages : %s',
  PARSEERR_ENTRANCE_FILE_ERROR: '未找到入口 %s 文件，或者文件读取失败，请检查后重新编译。',
  COMPILE_WXML_ERROR_CONSOLE: '编译 .wxml 文件错误，错误信息如上，可在控制台查看更详细信息',
  COMPILE_WXSS_ERROR_CONSOLE: '编译 .wxss 文件错误，错误信息如上，可在控制台查看更详细信息',
  PROJECT_CONFIGURATION_FILE: '项目配置文件',
  SELECT_UPLOAD_CODE_ERROR: '请选择需要上传的代码。错误：%s',
  QCLOUDROOT_NOT_FOUND_ERROR: '未找到 project.config.json 中的 qcloudRoot 字段。错误：%s',
  QCLOUDROOT_DIRECTORY_NOT_EXIST_ERROR: 'project.config.json 中的 qcloudRoot 字段指定的目录不存在。错误：%s',
  PREPARE_FILE_FORMAT: '准备 %s 文件',
  PREPARE_FILE: '准备文件',
  INITIALIZE_DEBUGGING_ENVIRONMENT: '初始化调试环境',
  PLEASE_TRY_AGAIN: '请重新尝试一次。',
  INITIALIZE_DEBUG_INSTANCE: '初始化调试实例',
  WAITING_FOR_PROCESS: '等待进程',
  FAILED_GET_FILE: '获取文件失败',
  SOURCEMANAGER_FILE_ERROR_DETAIL: '以下文件已被配置忽略打包上传，模拟器无法获取：',
  COMPILE_ERROR: '编译出错',
  WIDGETSERVICE_CONFIG_BODY_P1: '开发者工具使用 nwjs 来模拟小程序的实现，帮助大家来开发和调试微信小程序，所以这里是一个 webview，但真实的手机端是运行在 jscore 中的，所以请不要使用任何 bom 对象。',
  WIDGETSERVICE_CONFIG_BODY_P2: '我们建议你先完整阅读该开发文档，这将有助于更快地完成开发。如果发现我们的文档有任何错漏，或者开发过程中有任何疑问或者你有更好的建议，欢迎通过下列邮箱联系我们',
  WIDGETSERVICE_CONFIG_BODY_P3: '或者访问微信小程序开发者社区提交问题：',
  CLOSE_WINDOW: '关闭窗口',

  CREATE_PROJECT_NAME: '项目名称',
  CREATE_PROJECT_DIRECTORY: '项目目录',

  INVERSE_SELECT: '反选',
  USE_NPM_MODLUE: '使用 npm 模块',
  BUILD_NPM: '构建 npm',
  BUILDING: '正在构建...',
  ERROR_OCCURRED: '发生错误',
  BUILD_TIMEOUT: '完成构建。耗时 %s 毫秒。',
  NOT_FOUND_NODE_MODULES: '没有找到 node_modules 目录。',
  NOT_ALLOWED_REQUIRE_VAR: '不允许require变量',
  NOT_ALLOWED_REQUIRE_ASSIGN: '不允许将require函数赋值给其他变量',
  NOT_FOUND_NPM_ENTRY: '未找到npm包入口文件',

  GUANGZHOU: '广州',
  SHENZHEN: '深圳',
  BEIJING: '北京',
  SHANGHAI: '上海',
  FILE_IN_ROOT_CONFIG_DIR: '文件 %s 在 %s 指定的目录, 如果不希望在小程序/小游戏的运行环境中执行该文件，请使用 project.config.json "miniprogramRoot" 组织项目目录结构',
  CREATE_SUCCESS: '创建成功',
  ALREADY_EXIST: '已存在',
  OVERWRITE_FILE: '已存在文件 %s, 是否覆盖?',
  AUTO_UGLIFY_FILE_NAME_WHEN_UPLOAD: '上传时进行代码保护',
  TESTCODE: '测试代码',
  EXCEED_LIMIT: '%s 超过限制 %s',
  COULD_NOT_USE_CODE_PROTECT: '无法使用代码保护功能',
  NAVIGATETOMINIPROGRAM_TIPS: 'navigateToMiniProgram 接口需要配置声明，否则将无法跳转',
}
