<template>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-12 col-lg-3">
                <!-- Project Card -->
                <div class="card project-card no-hover">
                    <div class="media align-items-center">
                        <img class="card-img-top avatar-max-lg"  :src="product.icon" alt="">
                        <div class="media-body ml-4">
                            <h4 class="m-0">{{ capitalized(product.name) }}</h4>
                            <div class="countdown-times">
                                <h6 class="my-2">${{ product.token.toUpperCase() }}</h6>
                            </div>
                        </div>
                    </div>
                    <!-- Project Footer -->
                    <div class="project-footer d-flex align-items-center mt-4 mt-md-5">
                        <a class="btn btn-bordered-white btn-smaller" target="_blank" :href="product.website">Website</a>

                    </div>
                    <!-- Blockchain Icon -->
                    <div class="blockchain-icon">
                        <img src="#" alt="">
                    </div>
                </div>
            </div>
            <div class="col-lg-9 leaderboard-area">
                <div class="table-responsive">
                    <table class="table token-content table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Launchpad</th>
                            <th scope="col">Price</th>
                            <th scope="col">Raise</th>
                            <th scope="col">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(detail, index) in details" :key="index">
                            <td class="text-truncate"><img width="22" height="22" :src="detail.launchpad.image"> - {{ detail.launchpad.name }}</td>
                            <td class="text-truncate">{{ detail.price }}</td>
                            <td class="text-truncate">{{ formatNumber(detail.raise) }}</td>
                            <td class="text-truncate">{{ formatDateWithTime(detail.end_date) }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    props:['product', 'details'],
    methods: {
        capitalized(string) {
            return string
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        },
        formatTime(date) {
            if (date === "TBA") {
                return "TBA";
            }
            return this.formatDateWithTime(date).split(' ')[1];
        },
        formatDateWithTime(date) {
            const parsedDate = new Date(date);
            return parsedDate.toLocaleString();
        },
        formatNumber(number) {
            // Number Format işlemleri burada yapılabilir
            // Örneğin, 1000 -> 1,000
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style scoped>

</style>
