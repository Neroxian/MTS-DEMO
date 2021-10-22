<template>
    <div class="main">
        <div class="row">
        <div class="col-6 single">
            <h2 class="text-center">Buttons Basic</h2>
            
            <div class="button-list">
                <button type="button" class="btn btn-primary waves-effect waves-light">Primary</button>
                <button type="button" class="btn btn-success waves-effect waves-light">Success</button>
                <button type="button" class="btn btn-info waves-effect waves-light">Info</button>
                <button type="button" class="btn btn-warning waves-effect waves-light">Warning</button>
                <button type="button" class="btn btn-danger waves-effect waves-light">Danger</button>
                <button type="button" class="btn btn-dark waves-effect waves-light">Dark</button>
                <button type="button" class="btn btn-blue waves-effect waves-light">Blue</button>
                <button type="button" class="btn btn-pink waves-effect waves-light">Pink</button>
                <button type="button" class="btn btn-secondary waves-effect">Secondary</button>
                <button type="button" class="btn btn-light waves-effect">Light</button>
                <button type="button" class="btn btn-white waves-effect">White</button>
                <button type="button" class="btn btn-link waves-effect">Link</button>
            </div>
        </div>

        <div class="col-6 single">
            <h2 class="text-center">Buttons Outline</h2>
            
            <div class="button-list">
                <button type="button" class="btn btn-outline-primary waves-effect waves-light">Primary</button>
                <button type="button" class="btn btn-outline-success waves-effect waves-light">Success</button>
                <button type="button" class="btn btn-outline-info waves-effect waves-light">Info</button>
                <button type="button" class="btn btn-outline-warning waves-effect waves-light">Warning</button>
                <button type="button" class="btn btn-outline-danger waves-effect waves-light">Danger</button>
                <button type="button" class="btn btn-outline-dark waves-effect waves-light">Dark</button>
                <button type="button" class="btn btn-outline-blue waves-effect waves-light">Blue</button>
                <button type="button" class="btn btn-outline-pink waves-effect waves-light">Pink</button>
                <button type="button" class="btn btn-outline-secondary waves-effect">Secondary</button>
                <button type="button" class="btn btn-outline-light waves-effect">Light</button>
            </div>
        </div>
        </div>

        <div class="row">
        <div class="col-6 single">
            <h2 class="text-center">Buttons Width</h2>
            
            <div class="button-list">
                <button type="button" class="btn btn-primary width-xs waves-effect waves-light">xs</button>
                <button type="button" class="btn btn-success width-sm waves-effect waves-light">Small</button>
                <button type="button" class="btn btn-info width-md waves-effect waves-light">Middle</button>
                <button type="button" class="btn btn-warning width-lg waves-effect waves-light">Large</button>
                <button type="button" class="btn btn-danger width-xl waves-effect waves-light">Extra Large</button>
            </div>
        </div>

        <div class="col-6 single">
            <h2 class="text-center">Buttons sizes</h2>
            
            <div class="button-list">
                <button type="button" class="btn btn-pink btn-lg waves-effect waves-light">Btn Large</button>
                <button type="button" class="btn btn-secondary waves-effect waves-light">Btn Normal</button>
                <button type="button" class="btn btn-blue btn-sm waves-effect waves-light">Btn Small</button>
                <button type="button" class="btn btn-warning btn-xs waves-effect waves-light">Btn Xs</button>
            </div>
        </div>
        </div>     

        <div class="row">
        <div class="col-6 single">
            <h2 class="text-center">Buttons Icons</h2>
            
            <div class="button-list">
                <button type="button" class="btn btn-success waves-effect waves-light"><i class="mdi mdi-heart-half-full"></i></button>
                <button type="button" class="btn btn-danger waves-effect waves-light"><i class="mdi mdi-close"></i></button>
                <button type="button" class="btn btn-info waves-effect waves-light"><i class="mdi mdi-music"></i></button>
                <button type="button" class="btn btn-warning waves-effect waves-light"><i class="mdi mdi-star"></i></button>
                <button type="button" class="btn btn-blue waves-effect waves-light"><i class="mdi mdi-cog"></i></button>
            </div>
            <br/>
            <div class="button-list">
                <button type="button" class="btn btn-success waves-effect waves-light"><i class="mdi mdi-heart mr-1"></i> Like</button>
                <button type="button" class="btn btn-dark waves-effect waves-light"><i class="mdi mdi-email-outline mr-1"></i> Share</button>
                <button type="button" class="btn btn-info waves-effect waves-light"><i class="mdi mdi-cloud-outline mr-1"></i> Cloud Hosting</button>
                <button type="button" class="btn btn-warning waves-effect waves-light">Donate <i class="mdi mdi-currency-btc ml-1"></i></button>
            </div>
        </div>

        <div class="col-6 single">
            <h2 class="text-center">Buttons blocks</h2>
            
            <div class="button-list pr-xl-4">
                <button type="button" class="btn btn-block btn-lg btn-primary waves-effect waves-light">Block Button</button>
                <button type="button" class="btn btn-block btn-md btn-pink waves-effect waves-light">Block Button</button>
                <button type="button" class="btn btn-block btn-sm btn-success waves-effect waves-light">Block Button</button>
            </div>
        </div>
        </div>

        <div class="row">
        <div class="col-6 single">
            <h2 class="text-center">Bootstrap Modals</h2>
            <div class="row">
            <div class="mx-2">
                <b-button v-b-modal.modal-1 variant="primary">Basic Modal</b-button>

                <b-modal id="modal-1" title="Modal Heading">
                    <p class="my-4">Overflowing text to show scroll behavior Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </b-modal>
            </div>

            <div class="mx-1">
                <b-button v-b-modal.modal-center varaint="success">Center Modal</b-button>

                <b-modal id="modal-center" centered title="BootstrapVue">
                    <p class="my-4">Vertically centered modal!</p>
                </b-modal>
            </div>
            </div>
        </div>

        <div class="col-6 single">
            <h2 class="text-center">Dropdown </h2>
            <div>
            <b-dropdown id="dropdown-1" text="Dropdown Button" variant="primary" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-1" text="Dropdown Button" variant="secondary" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-1" text="Dropdown Button" variant="success" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-1" text="Dropdown Button" variant="info" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-1" text="Dropdown Button" variant="warning" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-1" text="Dropdown Button" variant="danger" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            </div>
        </div>   
    </div>

    <div class="row">
        <div class="col-6 single">
            <h2 class="text-center">Toolip</h2>
            
            <div class="button-list" >
                <b-button v-b-tooltip.hover.top title="Tooltip is on top" variant="primary btn-sm">Top</b-button>
                <b-button v-b-tooltip.hover.right title="Tooltip is on top" variant="primary btn-sm">Right</b-button>
                <b-button v-b-tooltip.hover.left title="Tooltip is on top" variant="primary btn-sm">Left</b-button>
                <b-button v-b-tooltip.hover.bottom title="Tooltip is on top" variant="primary btn-sm">Bottom</b-button>
            </div> 
        </div>

        <div class="col-6 single">
            <h2 class="text-center">Buttons sizes</h2>
            
            <span class="badge badge-primary badge-pill">Primary</span>
            <span class="badge badge-secondary badge-pill">Secondary</span>
            <span class="badge badge-success badge-pill">Success</span>
            <span class="badge badge-danger badge-pill">Danger</span>
            <span class="badge badge-warning badge-pill">Warning</span>
            <span class="badge badge-info badge-pill">Info</span>
            <span class="badge badge-pink badge-pill">Pink</span>
            <span class="badge badge-blue badge-pill">Blue</span>
            <span class="badge badge-light badge-pill">Light</span>
            <span class="badge badge-dark badge-pill">Dark</span>
        </div>
        </div> 
</div>
</template>

<style scoped>
.single{
    border: 1px solid rgb(187, 187, 187);
    border-radius: 5px;
    padding: 10px;
}
.badge{
    margin: 2px;
    font-weight: 500;
}
</style>

<script>
export default {
    name:"UIcomponent",
} 
</script>