import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>
                        User Profile
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Profile</li>
                    </ol>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box box-primary">
                                <div class="box-body box-profile">
                                    <img class="profile-user-img img-responsive img-circle" src="/images/user.png" alt="User profile picture" />

                                    <h3 class="profile-username text-center">Sherwin Mercurio</h3>

                                    <p class="text-muted text-center">Plower</p>

                                    <ul class="list-group list-group-unbordered">
                                        <li class="list-group-item">
                                            <b>Jobs Finished</b> <a class="pull-right">324</a>
                                        </li>
                                        <li class="list-group-item">
                                            <b>Rating</b> <a class="pull-right">3.5 out of 5</a>
                                        </li>
                                        <li class="list-group-item">
                                            <b>Rated by</b> <a class="pull-right">13,287</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-8">
                            <div class="nav-tabs-custom">
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#tab_1" data-toggle="tab">Activity</a></li>
                                    <li><a href="#tab_2" data-toggle="tab">Details</a></li>
                                    <li><a href="#tab_3" data-toggle="tab">Issues</a></li>
                                    <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab_1">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum nulla vitae tellus tempus efficitur. Suspendisse risus ex, vehicula sagittis placerat ut, dapibus sed diam. Proin tincidunt diam vitae augue efficitur, at malesuada nulla euismod. Sed vehicula enim eu sem pellentesque elementum. Morbi malesuada mauris at est posuere, non lacinia sapien cursus. Nam placerat, magna at viverra molestie, magna magna hendrerit mauris, sit amet viverra justo tortor sit amet ante. Quisque semper nisl enim. Donec id nisl vehicula nibh volutpat faucibus ut vitae ligula. Donec vitae mi ac felis condimentum fermentum accumsan nec lacus. Integer ut felis sapien. Proin egestas pharetra pretium.</p>
    
    <p>Integer non pretium ipsum. Donec maximus odio et lectus ornare pharetra. Integer ut arcu et velit consectetur rhoncus non non ligula. Donec vel turpis in mauris imperdiet ultrices a quis nisi. Morbi dui tellus, suscipit vel diam quis, porta ullamcorper nisl. Quisque at ipsum et orci sollicitudin convallis. Nunc vitae neque risus. Suspendisse potenti. Aliquam erat volutpat. Integer orci ligula, ultrices et augue eu, convallis gravida sem. Nam vulputate ligula a sapien ultrices elementum.</p>
    
    <p>Integer lobortis sed eros ut molestie. Pellentesque sit amet luctus leo. Morbi varius luctus ex a viverra. Quisque consectetur tellus ac ligula efficitur rutrum. Duis libero arcu, tincidunt non dictum ut, efficitur vitae ante. Etiam volutpat mollis erat, at consequat sapien dictum a. Nam tempor ipsum auctor enim volutpat auctor. Nunc vulputate quam hendrerit neque euismod vehicula. Nam accumsan magna massa, vitae pretium nisi efficitur ac. Nunc ac sapien tristique, facilisis nibh at, faucibus turpis. Nam pellentesque aliquet enim at placerat. Nulla non mollis magna. Cras vitae feugiat ligula. Suspendisse egestas dolor ac placerat consectetur. Nullam blandit varius augue et molestie.
    </p>
    Nam ultricies quis felis quis pellentesque. Nunc eu metus vitae nunc condimentum porttitor. Vestibulum finibus magna augue, at porttitor lectus commodo convallis. Curabitur nisl sapien, faucibus in tincidunt vitae, interdum a mi. Sed in odio turpis. Morbi ac nibh arcu. Nunc in libero dui. Praesent tincidunt accumsan suscipit. Etiam pellentesque nisi justo, sit amet tempus libero viverra nec. Duis tincidunt mi id felis accumsan, sed finibus orci finibus. Etiam convallis sem id mauris molestie ullamcorper. Nunc erat velit, suscipit non varius sed, vehicula in nisi. Proin nisl sem, venenatis a dignissim id, lacinia vitae enim. Phasellus id nibh varius metus hendrerit scelerisque. In a felis sed arcu blandit ullamcorper. Integer sed lorem non lectus convallis egestas sit amet a quam.
                                    </div>
                                    <div class="tab-pane" id="tab_2">
                                        The European languages are members of the same family. Their separate existence is a myth.
                                        For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                                        in their grammar, their pronunciation and their most common words. Everyone realizes why a
                                        new common language would be desirable: one could refuse to pay expensive translators. To
                                        achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                                        words. If several languages coalesce, the grammar of the resulting language is more simple
                                        and regular than that of the individual languages.
              </div>
                                    <div class="tab-pane" id="tab_3">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                                        like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        )
    }
}