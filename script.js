// State
let links = JSON.parse(localStorage.getItem('taoli_links')) || [
    {
        id: '1',
        title: '舒伯特网格',
        url: 'https://zhanghhrr.github.io/schulte_grid/',
        iconUrl:'https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/Design/grid-line.svg',
        description: '专注力训练 by 张皓然',
        category: '游戏',
        createdAt: Date.now()
    },
    {
        id: '2',
        title: '口算消消乐',
        url: 'https://ejv2wp98.html2web.com',
        iconUrl:'https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/Business/calculator-line.svg',
        description: '游戏化的口算训练 by 李娜',
        category: '计算',
        createdAt: Date.now()
    },
    {
        id: '3',
        title: '翻杯子',
        url: 'https://zhanghhrr.github.io/flipcup/',
        iconUrl:'https://www.svgrepo.com/show/528933/cup.svg',
        description: '让所有的杯子上下颠倒 by 胡琼',
        category: '游戏',
        createdAt: Date.now()
    },
    {
        id: '4',
        title: '倒油取水',
        url: 'https://zhanghhrr.github.io/oilwater/',
        iconUrl:'https://www.svgrepo.com/show/395946/bucket.svg',
        description: '量出指定体积的液体吧 by 燕子',
        category: '游戏',
        createdAt: Date.now()
    },
    {
        id: '5',
        title: '地基标数法',
        url: 'https://zhanghhrr.github.io/basenumber/',
        iconUrl:'https://www.svgrepo.com/show/498792/cube-unfolded.svg',
        description: '观察小方块的数量 by 瑜卿',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '6',
        title: '立方体染色演示',
        url: 'https://zhanghhrr.github.io/cubecolour/',
        iconUrl:'https://www.svgrepo.com/show/468396/cube.svg',
        description: '观察染色之后小方块的颜色 by 柴总',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '7',
        title: '鸡兔同笼大冒险',
        url: 'https://zhanghhrr.github.io/chickenrabbit/',
        iconUrl:'https://www.svgrepo.com/show/407273/rabbit.svg',
        description: '帮助淘淘和礼礼完成农场任务吧~ by 张皓然',
        category: '游戏',
        createdAt: Date.now()
    },
    {
        id: '8',
        title: '约瑟夫抽杀',
        url: 'https://zhanghhrr.github.io/josephus/',
        iconUrl:'https://www.svgrepo.com/show/481500/mouse-illustration-3.svg',
        description: '最后存活下来的老鼠编号是多少呢？ by 柴总',
        category: '游戏',
        createdAt: Date.now()
    },
    {
        id: '9',
        title: '自由狗问题',
        url: 'https://zhanghhrr.github.io/circledog/',
        iconUrl:'https://www.svgrepo.com/show/405231/dog-face.svg',
        description: '被绳子拴住的狗，能跑动的区域演示 by 柴总',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '10',
        title: '等积变形',
        url: 'https://zhanghhrr.github.io/equiareal_deformation/',
        iconUrl:'https://www.svgrepo.com/show/339784/area-custom.svg',
        description: '平四、长方形、梯形的等积变形互动演示 by 张皓然',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '11',
        title: '打洞立方体',
        url: 'https://zhanghhrr.github.io/perforated_cube/',
        iconUrl:'https://www.svgrepo.com/show/482378/cube-sugar-2.svg',
        description: '打洞立方体求体积表面积 by 轩哥',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '12',
        title: '立方体染色演示（进阶）',
        url: 'https://zhanghhrr.github.io/cubecolour2/',
        iconUrl:'https://www.svgrepo.com/show/293832/cube.svg',
        description: '能展开观察的立方体染色演示 by 🐉',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '13',
        title: '滚圆问题',
        url: 'https://zhanghhrr.github.io/rolling_circle/',
        iconUrl:'https://www.svgrepo.com/show/527642/circle-top-up.svg',
        description: '圆滚过的面积演示 by 柴总',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '14',
        title: '水中浸物',
        url: 'https://zhanghhrr.github.io/immerse/',
        iconUrl:'https://www.svgrepo.com/show/476814/water-transportation.svg',
        description: '物体浸入水中，体积变化演示 by 🐉',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '15',
        title: '看得见问题',
        url: 'https://zhanghhrr.github.io/circular_track/',
        iconUrl:'https://www.svgrepo.com/show/210337/race-track.svg',
        description: '环形跑道追及问题 by 🐉',
        category: '行程',
        createdAt: Date.now()
    },
    {
        id: '16',
        title: '圆的最密排布',
        url: 'https://duwgpnlxnyhtw.ok.kimi.link/',
        iconUrl:'https://www.svgrepo.com/show/335831/circles-seven.svg',
        description: '探索最省绳子的捆扎奥秘，发现生活中的数学之美 by 柴总',
        category: '几何',
        createdAt: Date.now()
    },
    {
        id: '17',
        title: '柳卡图',
        url: 'https://hgb3f4vqkkgsg.ok.kimi.link/',
        iconUrl:'https://www.svgrepo.com/show/495214/diagram.svg',
        description: '往返运动相遇问题可视化工具 by 🐉&柴总',
        category: '行程',
        createdAt: Date.now()
    },
    {
        id: '18',
        title: '时钟问题',
        url: 'https://hgb3f4vqkkgsg.ok.kimi.link/',
        iconUrl:'https://www.svgrepo.com/show/520498/clock.svg',
        description: '时钟问题所有题型探究 by 柴总',
        category: '行程',
        createdAt: Date.now()
    }
];

let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const linkGrid = document.getElementById('linkGrid');
const emptyState = document.getElementById('emptyState');
const categoryFilters = document.getElementById('categoryFilters');
const searchInput = document.getElementById('searchInput');
const categoryList = document.getElementById('categoryList');
const toast = document.getElementById('toast');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderApp();
    setupEventListeners();
    setupSortable();
});

// Setup SortableJS
function setupSortable() {
    new Sortable(linkGrid, {
        animation: 150,
        ghostClass: 'opacity-50',
        handle: '.drag-handle', // Drag handle selector
        onEnd: function (evt) {
            const itemEl = evt.item;
            const newIndex = evt.newIndex;
            const oldIndex = evt.oldIndex;
            
            // Note: This simple reordering only works perfectly when showing "All" and no search
            // For complex filtering, we might need to handle it differently, 
            // but for a simple navigation site, reordering usually implies "global order".
            // However, if we filter, the indices in DOM don't match indices in the main array.
            
            if (currentCategory === 'all' && searchQuery === '') {
                const movedItem = links.splice(oldIndex, 1)[0];
                links.splice(newIndex, 0, movedItem);
                saveLinks();
            } else {
                // If filtered, sorting is tricky. For now, maybe disable sorting or just warn.
                // Or we can just re-render to reset order if we don't support filtered sorting persistence.
                // Let's reload to reset the view to match data if the user tried to drop in a filtered view
                // causing visual inconsistency.
                // Actually, a better UX is to allow sorting only in "All" view or handle it smartly.
                // For simplicity in this v1, we'll just re-render to revert visual changes if filtered.
                renderGrid(); 
                showToast('请在“全部”分类且无搜索时进行排序', 'error');
            }
        }
    });
}

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderGrid();
    });
}

// Core Logic
function saveLinks() {
    localStorage.setItem('taoli_links', JSON.stringify(links));
}

function getFavicon(url) {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch (e) {
        return 'https://via.placeholder.com/64?text=Icon';
    }
}

function renderApp() {
    renderCategories();
    renderGrid();
    updateCategoryDatalist();
}

function renderCategories() {
    const categories = ['all', ...new Set(links.map(l => l.category).filter(Boolean))];
    
    categoryFilters.innerHTML = categories.map(cat => {
        const isActive = currentCategory === cat;
        const label = cat === 'all' ? '全部' : cat;
        return `
            <button 
                onclick="setCategory('${cat}')"
                class="px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    isActive 
                    ? 'bg-brand-500 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }"
            >
                ${label}
            </button>
        `;
    }).join('');
}

function updateCategoryDatalist() {
    const categories = [...new Set(links.map(l => l.category).filter(Boolean))];
    categoryList.innerHTML = categories.map(c => `<option value="${c}">`).join('');
}

function setCategory(cat) {
    currentCategory = cat;
    renderApp(); // Re-render categories too to update active state
}

function renderGrid() {
    const filteredLinks = links.filter(link => {
        const matchesCategory = currentCategory === 'all' || link.category === currentCategory;
        const matchesSearch = link.title.toLowerCase().includes(searchQuery) || 
                              (link.description && link.description.toLowerCase().includes(searchQuery)) ||
                              link.url.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredLinks.length === 0) {
        linkGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        return;
    }

    emptyState.classList.add('hidden');
    emptyState.classList.remove('flex');

    linkGrid.innerHTML = filteredLinks.map((link, index) => `
        <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group relative flex flex-col h-full animate-fade-in">
            <div class="p-5 flex-1">
                <div class="flex items-start justify-between mb-4">
                    <div class="w-12 h-12 rounded-lg bg-gray-50 p-2 border border-gray-100 flex items-center justify-center">
                        <img src="${link.iconUrl || getFavicon(link.url)}" alt="${link.title}" class="w-8 h-8 object-contain" onerror="this.src='https://via.placeholder.com/32?text=?'">
                    </div>
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                        <button onclick="deleteLink('${link.id}')" class="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-red-50 transition-colors" title="删除">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <div class="drag-handle cursor-move text-gray-300 hover:text-gray-600 p-1 rounded hover:bg-gray-100" title="拖拽排序">
                            <i class="fas fa-grip-vertical"></i>
                        </div>
                    </div>
                </div>
                
                <h3 class="font-bold text-gray-800 text-lg mb-1 truncate" title="${link.title}">${link.title}</h3>
                <p class="text-gray-500 text-sm line-clamp-2 h-10 mb-3" title="${link.description || ''}">${link.description || '暂无描述'}</p>
                
                <div class="flex items-center gap-2 mb-4">
                    <span class="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">${link.category || '未分类'}</span>
                </div>
            </div>
            
            <a href="${link.url}" target="_blank" class="block bg-gray-50 hover:bg-brand-50 text-center py-3 text-brand-600 font-medium text-sm transition-colors border-t border-gray-100">
                访问网站 <i class="fas fa-external-link-alt ml-1 text-xs"></i>
            </a>
        </div>
    `).join('');
}

function deleteLink(id) {
    if (confirm('确定要删除这个链接吗？')) {
        links = links.filter(l => l.id !== id);
        saveLinks();
        renderApp();
        showToast('链接已删除');
    }
}

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50 ${
        type === 'error' ? 'bg-red-500 text-white' : 'bg-gray-800 text-white'
    }`;
    
    // Show
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
    });

    // Hide after 3s
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Global scope exposure for inline onclick handlers
window.setCategory = setCategory;
window.deleteLink = deleteLink;
