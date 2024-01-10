<template>
    <div class="row items sticky-top" style="z-index: 1000;">
        <div class="col-12 item">
            <div class="card project-card prev-project-card" style="background-color: rgba(22, 24, 45, 1);">
                <div
                    class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                    <div class="col-3"> Token</div>
                    <div class="col-3 text-center"> Chain - Launchpad</div>
                    <div class="col-2 text-center">Date</div>
                    <div class="col-2">Price</div>
                    <div class="col-2">Raise</div>
                </div>
            </div>
        </div>

        <div class="col-12 item">
            <div class="card project-card prev-project-card" style="background-color: rgba(22, 24, 45, 1);">
                <div class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                    <div class="col-12">
                        <div class="filters d-flex align-items-center justify-content-around">
                            <input v-model="filters.token" @input="handleFilterChange" placeholder="Token veya İsim Ara" class="form-control col-md-2">
                            <select v-model="filters.network" @change="handleFilterChange" class="form-control col-md-2">
                                <option value="">Networkler</option>
                                <option v-for="network in networks" :key="network" :value="network">{{ network }}</option>
                            </select>
                            <select v-model="filters.launchpadId" @change="handleFilterChange" class="form-control col-md-2">
                                <option value="">Launchpadler</option>
                                <option v-for="launchpad in launchpads" :key="launchpad.id" :value="launchpad.id">{{ launchpad.name }}</option>
                            </select>
                            <label class="align-items-center d-flex form-check-label">
                                <input type="checkbox" v-model="filters.excludeTBA" @change="updateProducts" class="form-control">
                                <span class="pl-2">TBA Hariç</span>
                            </label>
                            <button @click="clearFilters" class="btn btn-warning">Filtreleri Temizle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="row items" id="productList">
        <div v-for="(product, index) in products.data" :key="index" class="col-12 item">
            <div class="card project-card prev-project-card">
                <div
                    class="project-content d-md-flex flex-column flex-md-row align-items-center justify-content-md-between">
                    <div class="col-3 item-header d-flex align-items-center mb-4 mb-md-0">
                        <img class="card-img-top avatar-md" :src="asset(product.icon)" :alt="capitalized(product.name)">
                        <div class="content ml-4 text-light">
                            <p class="m-0 text-truncate">{{ capitalized(product.name) }}</p>
                            <p class="small mt-0 mb-0">Token: ${{ product.token.toUpperCase() }}</p>
                        </div>
                    </div>
                    <div class="align-items-center col-3 d-flex images justify-content-around">
                        <img style="border-radius: 50%" width="25" height="25" :src="chainIcon(product.network)"
                             alt="Chain Icon">
                        <div>
                            <img v-for="(launchpad, index) in product.launchpads" :key="index"
                                 style="border-radius: 50%; border:1px solid #ddd; margin-right: 5px"
                                 :src="asset(launchpad.image)" :alt="launchpad.name" :title="launchpad.name" width="40"
                                 height="40">
                        </div>
                    </div>
                    <div class="col-2 small text-center">
                        {{ formatDate(product.end_date) }}<br>
                        <span style="font-size: smaller">{{ formatTime(product.end_date) }}</span>
                    </div>
                    <div class="col-2 text-truncate">
                        <p class="single-item" style="width: initial">
                            <template v-if="product.minPrice !== product.maxPrice">
                                <span>Min: {{ product.minPrice }}</span><br>
                                <span>Max: {{ product.maxPrice }}</span>
                            </template>
                            <template v-else>
                                <span>Price: {{ product.price }}</span>
                            </template>
                        </p>
                    </div>
                    <div class="col-2">
                        <p class="single-item">
                            <template v-if="product.minRaise !== product.maxRaise">
                                <span>Min: {{ formatNumber(product.minRaise) }}</span><br>
                                <span>Max: {{ formatNumber(product.maxRaise) }}</span>
                            </template>
                            <template v-else>
                                <span>Raise: {{ formatNumber(product.raise) }}</span>
                            </template>
                        </p>
                    </div>
                </div>
                <Link class="project-link" :href="'/product/' + product.id "></Link>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-12">
            <nav aria-label="Page navigation">
                <ul class="page-numbers">

                    <!-- Previous Page Button -->
                    <li class="page-item" :class="{disabled: filters.page === 1}">
                        <a href="#" aria-label="Previous" @click.prevent="goToPage(filters.page - 1)">
                            <a href="#" aria-current="page" class="page-numbers">&laquo;</a>
                        </a>
                    </li>

                    <!-- Page Numbers -->
                    <template v-for="n in products.last_page">
                        <!-- Show first page number -->
                        <li v-if="n === 1 || Math.abs(filters.page - n) <= 3 || n === products.last_page" :key="n" :class="{active: filters.page === n}" class="page-item">
                            <span v-if="filters.page === n" aria-current="page" class="page-numbers current">{{ n }}</span>
                            <a v-else class="page-numbers" href="#"  @click.prevent="goToPage(n)">{{ n }}</a>
                        </li>

                        <li v-else-if="Math.abs(filters.page - n) === 4" :key="'ellipsis' + n">
                            <span class="page-numbers dots">…</span>
                        </li>
                    </template>

                    <!-- Next Page Button -->
                    <li class="page-item" :class="{disabled: filters.page === products.last_page}">
                        <a href="#" aria-label="Next" @click.prevent="goToPage(filters.page + 1)">
                            <a href="#" aria-current="page" class="page-numbers">&raquo;</a>
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    </div>


</template>
<script>

import {ref, reactive, computed} from 'vue';
import { router, Link } from "@inertiajs/vue3";

export default {
    props: ['products', 'networks', 'launchpads', 'links'],
    components: {
        Link,
        router
    },
    mounted() {
        this.initializeFiltersFromQueryParams();
    },
    methods: {
        capitalized(string) {
            return string
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        },
        asset(path) {
            return `${path}`;
        },
        chainIcon(network) {
            // Network ikonlarının bulunduğu klasörün yolu
            return `https://icons.llamao.fi/icons/chains/rsz_${network.toLowerCase()}.jpg`;
        },
        formatDate(date) {
            if (date === "TBA") {
                return "TBA";
            }
            return this.formatDateWithTime(date).split(' ')[0];
        },
        formatTime(date) {
            if (date === "TBA") {
                return "";
            }
            return this.formatDateWithTime(date).split(' ')[1];
        },
        formatDateWithTime(date) {
            // JavaScript'te tarih işlemleri için uygun bir kütüphane kullanabilirsiniz (örneğin, date-fns)
            // Bu örnekte, basit bir tarih biçimlendirme işlemi yapılmıştır
            const parsedDate = new Date(date);
            return parsedDate.toLocaleString();
        },
        formatNumber(number) {
            // Number Format işlemleri burada yapılabilir
            // Örneğin, 1000 -> 1,000
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        initializeFiltersFromQueryParams() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);

            this.filters.token = urlParams.get('token') || '';
            this.filters.network = urlParams.get('network') || '';
            this.filters.launchpadId = urlParams.get('launchpadId') || '';
            this.filters.excludeTBA = urlParams.get('excludeTBA') === 'true';
            this.filters.page = parseInt(urlParams.get('page')) || 1;
        },
        clearFilters() {
            // Filtreleri temizleme
            this.filters.token = '';
            this.filters.network = '';
            this.filters.launchpadId = '';
            this.filters.excludeTBA = false;
            this.filters.page = 1;
            // Filtre temizleme işleminden sonra ürünleri güncelle
            this.updateProducts();
        }
    },
    setup(props) {

        const products = ref(props.products || {data: [], last_page: 1});

        const filters = reactive({
            token: '',
            network: '',
            launchpadId: '',
            excludeTBA: false,
            page: 1
        });

        const pageCount = computed(() => {
            return products.last_page || 0;
        });

        let debounceTimeout = null;

        const updateProducts = () => {
            // router.get('/', {params: filters});
            router.get('/', filters)
        };

        const handleFilterChange = () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
            debounceTimeout = setTimeout(() => {
                filters.page = 1;
                updateProducts();
            }, 500);
        };


        const goToPage = (page) => {
            filters.page = page;
            updateProducts();
        };

        //onMounted(updateProducts);

        return {products, filters, updateProducts, handleFilterChange, goToPage, pageCount};
    },
};

</script>
