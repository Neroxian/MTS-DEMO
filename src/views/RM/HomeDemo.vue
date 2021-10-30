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

                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>

                    <div class="row">
              
              <div class="col-6">
              <ul class="list-unstyled">
                <li style="visibility:hidden">
                  <h5 class="mt-0 mb-1 font-weight-bold">RM (Pune)</h5>
                  <p class="text-muted">
                   Dispatched on October 22 2021 <small class="text-muted">12:16 AM</small>
                  </p>
                </li>
                <li class="text-right">
                  <span class=""></span>
                  <h5 class="mt-4 mb-1 font-weight-bold">LLC (Pune Office)</h5>
                  <p class="text-muted">
                  Pending at Pune Office
                  </p>
                </li>
                <li style="visibility:hidden">
                  <h5 class="mt-3 mb-1 font-weight-bold">ALC (Computer center)</h5>
                  <p class="text-muted">Pending (Yet to come).</p>
                </li>
              </ul>
              </div>

              <div class="track-order-list col-6">
              <ul class="list-unstyled ">
                <li class="completed">
                  <h5 class="mt-0 mb-1 font-weight-bold">RM (Pune)</h5>
                  <p class="text-muted">
                   Dispatched on October 22 2021 <small class="text-muted">12:16 AM</small>
                  </p>
                </li>
                <li >
                  <span class="active-dot dot"></span>
                  <div style="visibility:hidden">
                    <h5 class="mt-0 mb-1 font-weight-bold">LLC (Pune Office)</h5>
                  <p class="text-muted">
                  Pending at Pune Office
                  </p>
                  </div>
                </li>
                <li>
                  <h5 class="mt-0 mb-1 font-weight-bold">ALC (Computer center)</h5>
                  <p class="text-muted">Pending (Yet to come).</p>
                </li>
              </ul>
              </div>

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
