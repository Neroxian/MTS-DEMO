<template>
  <div class="home">
    <div class="row">
                            <div class="col-xl-4 col-md-6">
                                <!-- Portlet card -->
                                <div class="card">
                                    <div class="card-body" dir="ltr">
                                        <div class="card-widgets">
                                            <a href="javascript: void(0);" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded="false" aria-controls="cardCollpase1"><i class="mdi mdi-minus"></i></a>
                                            <a href="javascript: void(0);" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Lifetime Sales</h4>

                                        <div id="cardCollpase1" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div class="row mt-2">
                                                    <div class="col-4">
                                                        <h3 data-plugin="counterup">3,487</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Total Sales</p>
                                                    </div>
                                                    <div class="col-4">
                                                        <h3 data-plugin="counterup">814</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Open Campaign</p>
                                                    </div>
                                                    <div class="col-4">
                                                        <h3 data-plugin="counterup">5,324</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Daily Sales</p>
                                                    </div>
                                                </div> <!-- end row -->

                                                <div id="lifetime-sales" data-colors="#4fc6e1,#6658dd,#ebeff2" style="height: 270px;" class="morris-chart mt-3"></div>                
                                            
                                            </div>
                                        </div> <!-- end collapse-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->

                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    <div class="card-body" dir="ltr">
                                        <div class="card-widgets">
                                            <a href="javascript: void(0);" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase3" role="button" aria-expanded="false" aria-controls="cardCollpase3"><i class="mdi mdi-minus"></i></a>
                                            <a href="javascript: void(0);" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Statistics</h4>

                                        <div id="cardCollpase3" class="collapse pt-3 show">
                                            <div class="text-center">

                                                <div class="row mt-2">
                                                    <div class="col-6">
                                                        <h3 data-plugin="counterup">1,284</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Total Sales</p>
                                                    </div>
                                                    <div class="col-6">
                                                        <h3 data-plugin="counterup">7,841</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Open Campaign</p>
                                                    </div>
                                                </div> <!-- end row -->
                                                <div id="statistics-chart" data-colors="#02c0ce" style="height: 270px;" class="morris-chart mt-3"></div>

                                            </div>
                                        </div> <!-- end collapse-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->

                            <div class="col-xl-4 col-md-12">
                                <div class="card">
                                    <div class="card-body" dir="ltr">
                                        <div class="card-widgets">
                                            <a href="javascript: void(0);" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                                            <a data-toggle="collapse" href="#cardCollpase2" role="button" aria-expanded="false" aria-controls="cardCollpase2"><i class="mdi mdi-minus"></i></a>
                                            <a href="javascript: void(0);" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                        </div>
                                        <h4 class="header-title mb-0">Income Amounts</h4>

                                        <div id="cardCollpase2" class="collapse pt-3 show">
                                            <div class="text-center">
                                                <div class="row mt-2">
                                                    <div class="col-4">
                                                        <h3 data-plugin="counterup">2,845</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Total Sales</p>
                                                    </div>
                                                    <div class="col-4">
                                                        <h3 data-plugin="counterup">6,487</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Open Campaign</p>
                                                    </div>
                                                    <div class="col-4">
                                                        <h3 data-plugin="counterup">201</h3>
                                                        <p class="text-muted font-13 mb-0 text-truncate">Daily Sales</p>
                                                    </div>
                                                </div> <!-- end row -->

                                                <div id="income-amounts" data-colors="#4a81d4,#e3eaef" style="height: 270px;" class="morris-chart mt-3"></div>

                                            </div>
                                        </div> <!-- end collapse-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeDemo',
}
</script>

<style>

</style>
