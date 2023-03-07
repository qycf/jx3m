export const options = [
    {
        value: '0',
        label: '纯阳宫',
        children: [
            { value: '纯阳宫', label: '纯阳宫' },
            { value: '百尺峡', label: '百尺峡' },
            { value: '论剑锋', label: '论剑锋' },
            { value: '纯阳山门', label: '纯阳山门' },
            { value: '华山山道', label: '华山山道' },
            { value: '观微阁', label: '观微阁' },
            { value: '剑园', label: '剑园' },
            { value: '九老洞', label: '九老洞' },
            { value: '老君宫', label: '老君宫' },
            { value: '落雁岭', label: '落雁岭' },
            { value: '神策后营', label: '神策后营' },
            { value: '神策前营', label: '神策前营' },
            { value: '思过崖', label: '思过崖' },
        ],
    },
    {
        value: 1, label: '万花谷',
        children: [
            { value: '三星望月', label: '三星望月' },
            { value: '拦星潭', label: '拦星潭' },
            { value: '落星湖', label: '落星湖' },
            { value: '黄梁村', label: '黄梁村' },
            { value: '聋哑村', label: '聋哑村' },
            { value: '晴昼海', label: '晴昼海' },
            { value: '生死树', label: '生死树' },
            { value: '水月宫', label: '水月宫' },
            { value: '仙迹岩', label: '仙迹岩' },
            { value: '逍遥林', label: '逍遥林' },
            { value: '寻仙径', label: '寻仙径' },
            { value: '天工坊外围', label: '天工坊外围' },
            { value: '天工坊密道', label: '天工坊密道' },
        ]
    },
    {
        value: 'wudu',
        label: '五毒教',
        children: [
            {
                value: 'xishandu',
                label: '溪山渡',

            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio',
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox',
                    },
                    {
                        value: 'input',
                        label: 'Input',
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber',
                    },
                    {
                        value: 'select',
                        label: 'Select',
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader',
                    },
                    {
                        value: 'switch',
                        label: 'Switch',
                    },
                    {
                        value: 'slider',
                        label: 'Slider',
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker',
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker',
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker',
                    },
                    {
                        value: 'upload',
                        label: 'Upload',
                    },
                    {
                        value: 'rate',
                        label: 'Rate',
                    },
                    {
                        value: 'form',
                        label: 'Form',
                    },
                ],
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table',
                    },
                    {
                        value: 'tag',
                        label: 'Tag',
                    },
                    {
                        value: 'progress',
                        label: 'Progress',
                    },
                    {
                        value: 'tree',
                        label: 'Tree',
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination',
                    },
                    {
                        value: 'badge',
                        label: 'Badge',
                    },
                ],
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert',
                    },
                    {
                        value: 'loading',
                        label: 'Loading',
                    },
                    {
                        value: 'message',
                        label: 'Message',
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox',
                    },
                    {
                        value: 'notification',
                        label: 'Notification',
                    },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'Menu',
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs',
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb',
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown',
                    },
                    {
                        value: 'steps',
                        label: 'Steps',
                    },
                ],
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog',
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip',
                    },
                    {
                        value: 'popover',
                        label: 'Popover',
                    },
                    {
                        value: 'card',
                        label: 'Card',
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel',
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse',
                    },
                ],
            },
        ],
    },
    {
        value: 'resource',
        label: 'Resource',
        children: [
            {
                value: 'axure',
                label: 'Axure Components',
            },
            {
                value: 'sketch',
                label: 'Sketch Templates',
            },
            {
                value: 'docs',
                label: 'Design Documentation',
            },
        ],
    },
]

export const map = [
    {
        id:0,
        name:'纯阳宫',
    },
    {
        id:1,
        name:'万花谷',
    },
    {
        id:2,
        name:'七秀坊',
    },
    {
        id:3,
        name:'少林寺',
    },
    {
        id:4,
        name:'天策府',
    },
    {
        id:5,
        name:'五毒教',
    },
    {
        id:6,
        name:'稻香村',
    }
]