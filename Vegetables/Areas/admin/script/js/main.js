
/*product*/
let sp = 0

$(document).on("click", "#product", function () {
    sp += 1;
    $.ajax({
        url: "/admin/HomeAdmin/Product",
        success: function (response) {
           
            document.getElementById('content-main').innerHTML = response;
            $(document).on("click", ".btn.btn-primary.btn-paging-kh", function () {
                var page = $(this).text();
                var t = parseInt(page)
                $('#btn-active').css("background-color", "black");
                $('#btn-active').removeAttr("id");
                $(this).attr('id', 'btn-active');
                $(this).css("background-color", "#ff8800");
                $.ajax({
                    url: "/api/product?page=" + page,
                    method: "GET",
                    contentType: "json",
                    success: function (res) {
                        console.log(res)
                        var length = res.length;
                        var tableHtml = '';
                        for (var i = 0; i < length; i++) {
                            var s = (t - 1) * 10 + (i + 1)
                            tableHtml = tableHtml + "<tr>";
                            tableHtml = tableHtml + '<th scope="row">' + s + '</th>';
                            tableHtml = tableHtml + '<td>' + res[i].MaSP + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].TenSP + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].MaLoaiSP + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].MaTH + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].SoLuong + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].DonGia + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].Mota + '</td>';
                            tableHtml = tableHtml + "<td>" + "<i class='fa fa-edit btn-action kh mr-3 ' per='1' id='" + res[i].MaSP + "'></i>";
                            tableHtml = tableHtml + "<i class='fa-solid fa-trash btn-action kh ' per='2' id='" + res[i].MaSP + "'></i>" + "</td>";
                            tableHtml = tableHtml + "</tr>";
                        }
                        $("tbody").html(tableHtml);
                    }
                });
            });
            if (sp == 1) {
                GetListProduct = function () {
                    $.ajax({
                        url: "/api/product?sl=10",
                        method: "GET",
                        contentType: "json",
                        crossDomain: true,
                        dataType: 'json',
                        success: function (res) {
                            var length = res.length;
                            var tableHtml = '';
                            for (var i = 0; i < length; i++) {
                                tableHtml = tableHtml + "<tr>";
                                tableHtml = tableHtml + '<th scope="row">' + (i + 1) + '</th>';
                                tableHtml = tableHtml + '<td>' + res[i].MaSP + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].MaLoaiSP + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].MaTH + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].SoLuong + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].DonGia + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].Mota + '</td>';
                                tableHtml = tableHtml + "<td>" + "<i class='fa fa-edit btn-action kh mr-3' per='1' id='" + res[i].MaSP + "'></i>";
                                tableHtml = tableHtml + "<i class='fa fa-trash btn-action kh ' per='2' id='" + res[i].MaSP + "'></i>" + "</td>";
                                tableHtml = tableHtml + "</tr>";
                            }
                            $("tbody").html(tableHtml);
                        },
                        error: function () {
                            console.log("Load api get thất bại");
                        }
                    });
                }
                    //$(document).on("click", ".btn-action.kh", function () {
                    //    var per = $(this).attr("per");
                    //    var id = $(this).attr("id");
                    //    GetKH = function (id) {
                    //        $.ajax({
                    //            url: "/api/khachhang?ma=" + id,
                    //            method: "GET",
                    //            contentType: "json",
                    //            crossDomain: true,
                    //            dataType: 'json',
                    //            success: function (res) {
                    //                //Đặt giá trị các input
                    //                $("#ip-makh").val(res.MaKH);
                    //                $("#ip-tenkh").val(res.TenKH);
                    //                $("#ip-dc").val(res.DiaChi);
                    //                $("#ip-dt").val(res.SDT);
                    //                $("#ip-email").val(res.Email);
                    //                $(".model_register-sex").val(res.GioiTinh == "Nam" ? "1" : "0");
                    //                $("#ip-ns").val(dateFormat2(res.NgaySinh));
                    //            },
                    //            error: function () {
                    //                console.log("Load api get thất bại");
                    //            }
                    //        });
                    //    }
                    //    //Xóa
                    //    if (per == 2) {
                    //        if (confirm("Bạn chắc chắn muốn xóa?")) {
                    //            $.ajax({
                    //                url: "/api/khachhang?ma=" + id,
                    //                method: "DELETE",
                    //                contentType: "json",
                    //                crossDomain: true,
                    //                dataType: 'json',
                    //                success: function (res) {
                    //                    if (res == true) {
                    //                        alert("Đã xóa thành công");
                    //                        //load lại
                    //                        setTimeout(function () {
                    //                            $(".modal-header button").trigger('click'); //Đóng modal
                    //                            GetListKH();
                    //                        }, 500);
                    //                    } else {
                    //                        alert("Mã kh không hợp lệ");
                    //                    }
                    //                },
                    //                error: function () {
                    //                    alert("Thao tác thất bại");
                    //                }
                    //            });
                    //        }
                    //        else {
                    //        }

                    //    }
                    //    //Thêm,sửa thì bật modal
                    //    else {
                    //        $(".btn-openmodal").trigger("click");
                    //        $(".btn-khachhang-save").attr("per", per); //đặt per cho nút lưu để xem là thêm hay sửa
                    //        //Thêm
                    //        if (per == 0) {
                    //            $(".modal-title").text("Add customer");
                    //            //Reset các input
                    //            $("#ip-makh").val("");
                    //            $("#ip-tenkh").val("");
                    //            $("#ip-dc").val("");
                    //            $("#ip-dt").val("");
                    //            $("#ip-email").val("");
                    //            $(".model_register-sex option[value = '-1']")[0].selected = true;
                    //            $("#ip-ns").val("");
                    //        }
                    //        //Sửa
                    //        else {
                    //            $(".modal-title").text("Edit customer");
                    //            GetKH(id);
                    //        }
                    //    }
                    //});
                    ////Sự kiện nút lưu
                    //$(document).on("click", ".btn-khachhang-save", function () {
                    //    var per = $(this).attr("per");
                    //    var id = $("#ip-makh").val();
                    //    var name = $("#ip-tenkh").val();
                    //    var address = $("#ip-dc").val();
                    //    var phoneNumber = $("#ip-dt").val();
                    //    var email = $('#ip-email').val();
                    //    var gioitinh = $('.model_register-sex').val();
                    //    var ngaySinh = $('#ip-ns').val();
                    //    //Validate input rỗng
                    //    if (name == "" || address == "" || phoneNumber == "" || email == "" || gioitinh == "" || ngaySinh == "") {
                    //        /*toastr.error("Thông tin nhập chưa đủ", "Thông báo");*/
                    //        alert('Thông tin nhập chưa đủ')
                    //    }
                    //    else {
                    //        if (per == 0) {
                    //            $.ajax({
                    //                url: "/api/khachhang?hoten=" + name + "&diachi=" + address + "&sdt=" + phoneNumber + "&email=" + email + "&ngaysinh=" + ngaySinh + "&gioitinh=" + gioitinh,
                    //                method: "POST",
                    //                contentType: "json",
                    //                crossDomain: true,
                    //                dataType: 'json',
                    //                success: function (res) {
                    //                    if (res == true) {
                    //                        alert("Đã thêm thành công");
                    //                        $.ajax({
                    //                            url: "/api/taikhoan?username=" + email + "&password=" + 'caoanh10' + "&quyen=" + 'user',
                    //                            method: "POST",
                    //                            contentType: "json",
                    //                            crossDomain: true,
                    //                            dataType: 'json',
                    //                            success: function (res) {

                    //                            },
                    //                            error: function () {
                    //                                alert("Thao tác thất bại");
                    //                            }
                    //                        });

                    //                        //load lại
                    //                        setTimeout(function () {
                    //                            $(".modal-header button").trigger('click');
                    //                            document.getElementsByTagName("modal-backdrop fade show").style = "display:none;"
                    //                            GetListKH();
                    //                        }, 500);
                    //                    } else {
                    //                        alert("Mã kh không hợp lệ");
                    //                    }
                    //                },
                    //                error: function () {
                    //                    alert("Thao tác thất bại");
                    //                }
                    //            });
                    //        } else {  // sửa
                    //            $.ajax({
                    //                url: "/api/khachhang?ma=" + id + "&hoten=" + name + "&diachi=" + address + "&sdt=" + phoneNumber + "&email=" + email + "&ngaysinh=" + ngaySinh + "&gioitinh=" + gioitinh,
                    //                method: "PUT",
                    //                contentType: "json",
                    //                crossDomain: true,
                    //                dataType: 'json',
                    //                success: function (res) {
                    //                    if (res == true) {
                    //                        alert("Đã sửa thành công");
                    //                        //load lại
                    //                        setTimeout(function () {
                    //                            $(".modal-header button").trigger('click');
                    //                            GetListKH();
                    //                        }, 500);
                    //                    } else {
                    //                        alert("Email đã tồn tại");
                    //                    }
                    //                },
                    //                error: function () {
                    //                    alert("Thao tác thất bại");
                    //                }
                    //            });
                    //        }
                    //    }
                    //});
                } GetListProduct();
            },
            error: function () {
                console.log("Load api get thất bại");
            }
        });

});


/*order*/
let od = 0
$(document).on("click", "#order", function () {
    od += 1;
    $.ajax({
        url: "/admin/HomeAdmin/Order",
        success: function (response) {

            document.getElementById('content-main').innerHTML = response;
            $(document).on("click", ".btn.btn-primary.btn-paging-kh", function () {
                var page = $(this).text();
                var t = parseInt(page)
                $('#btn-active').css("background-color", "black");
                $('#btn-active').removeAttr("id");
                $(this).attr('id', 'btn-active');
                $(this).css("background-color", "#ff8800");
                $.ajax({
                    url: "/api/order?page=" + page,
                    method: "GET",
                    contentType: "json",
                    success: function (res) {
                        console.log(res)
                        var length = res.length;
                        var tableHtml = '';
                        for (var i = 0; i < length; i++) {
                            var s = (t - 1) * 10 + (i + 1)
                            tableHtml = tableHtml + "<tr>";
                            tableHtml = tableHtml + '<th scope="row">' + s + '</th>';
                            tableHtml = tableHtml + '<td>' + res[i].MaSP + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].TenSP + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].MaLoaiSP + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].MaTH + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].SoLuong + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].DonGia + '</td>';
                            tableHtml = tableHtml + '<td>' + res[i].Mota + '</td>';
                            tableHtml = tableHtml + "<td>" + "<i class='fa fa-edit btn-action kh mr-3 ' per='1' id='" + res[i].MaSP + "'></i>";
                            tableHtml = tableHtml + "<i class='fa-solid fa-trash btn-action kh ' per='2' id='" + res[i].MaSP + "'></i>" + "</td>";
                            tableHtml = tableHtml + "</tr>";
                        }
                        $("tbody").html(tableHtml);
                    }
                });
            });
            if (od == 1) {
                GetListProduct = function () {
                    $.ajax({
                        url: "/api/order?sl=10",
                        method: "GET",
                        contentType: "json",
                        crossDomain: true,
                        dataType: 'json',
                        success: function (res) {
                            var length = res.length;
                            var tableHtml = '';
                            for (var i = 0; i < length; i++) {
                                tableHtml = tableHtml + "<tr>";
                                tableHtml = tableHtml + '<th scope="row">' + (i + 1) + '</th>';
                                tableHtml = tableHtml + '<td>' + res[i].MaSP + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].MaLoaiSP + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].MaTH + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].SoLuong + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].DonGia + '</td>';
                                tableHtml = tableHtml + '<td>' + res[i].Mota + '</td>';
                                tableHtml = tableHtml + "<td>" + "<i class='fa fa-edit btn-action kh mr-3' per='1' id='" + res[i].MaSP + "'></i>";
                                tableHtml = tableHtml + "<i class='fa fa-trash btn-action kh ' per='2' id='" + res[i].MaSP + "'></i>" + "</td>";
                                tableHtml = tableHtml + "</tr>";
                            }
                            $("tbody").html(tableHtml);
                        },
                        error: function () {
                            console.log("Load api get thất bại");
                        }
                    });
                }
                //$(document).on("click", ".btn-action.kh", function () {
                //    var per = $(this).attr("per");
                //    var id = $(this).attr("id");
                //    GetKH = function (id) {
                //        $.ajax({
                //            url: "/api/khachhang?ma=" + id,
                //            method: "GET",
                //            contentType: "json",
                //            crossDomain: true,
                //            dataType: 'json',
                //            success: function (res) {
                //                //Đặt giá trị các input
                //                $("#ip-makh").val(res.MaKH);
                //                $("#ip-tenkh").val(res.TenKH);
                //                $("#ip-dc").val(res.DiaChi);
                //                $("#ip-dt").val(res.SDT);
                //                $("#ip-email").val(res.Email);
                //                $(".model_register-sex").val(res.GioiTinh == "Nam" ? "1" : "0");
                //                $("#ip-ns").val(dateFormat2(res.NgaySinh));
                //            },
                //            error: function () {
                //                console.log("Load api get thất bại");
                //            }
                //        });
                //    }
                //    //Xóa
                //    if (per == 2) {
                //        if (confirm("Bạn chắc chắn muốn xóa?")) {
                //            $.ajax({
                //                url: "/api/khachhang?ma=" + id,
                //                method: "DELETE",
                //                contentType: "json",
                //                crossDomain: true,
                //                dataType: 'json',
                //                success: function (res) {
                //                    if (res == true) {
                //                        alert("Đã xóa thành công");
                //                        //load lại
                //                        setTimeout(function () {
                //                            $(".modal-header button").trigger('click'); //Đóng modal
                //                            GetListKH();
                //                        }, 500);
                //                    } else {
                //                        alert("Mã kh không hợp lệ");
                //                    }
                //                },
                //                error: function () {
                //                    alert("Thao tác thất bại");
                //                }
                //            });
                //        }
                //        else {
                //        }

                //    }
                //    //Thêm,sửa thì bật modal
                //    else {
                //        $(".btn-openmodal").trigger("click");
                //        $(".btn-khachhang-save").attr("per", per); //đặt per cho nút lưu để xem là thêm hay sửa
                //        //Thêm
                //        if (per == 0) {
                //            $(".modal-title").text("Add customer");
                //            //Reset các input
                //            $("#ip-makh").val("");
                //            $("#ip-tenkh").val("");
                //            $("#ip-dc").val("");
                //            $("#ip-dt").val("");
                //            $("#ip-email").val("");
                //            $(".model_register-sex option[value = '-1']")[0].selected = true;
                //            $("#ip-ns").val("");
                //        }
                //        //Sửa
                //        else {
                //            $(".modal-title").text("Edit customer");
                //            GetKH(id);
                //        }
                //    }
                //});
                ////Sự kiện nút lưu
                //$(document).on("click", ".btn-khachhang-save", function () {
                //    var per = $(this).attr("per");
                //    var id = $("#ip-makh").val();
                //    var name = $("#ip-tenkh").val();
                //    var address = $("#ip-dc").val();
                //    var phoneNumber = $("#ip-dt").val();
                //    var email = $('#ip-email').val();
                //    var gioitinh = $('.model_register-sex').val();
                //    var ngaySinh = $('#ip-ns').val();
                //    //Validate input rỗng
                //    if (name == "" || address == "" || phoneNumber == "" || email == "" || gioitinh == "" || ngaySinh == "") {
                //        /*toastr.error("Thông tin nhập chưa đủ", "Thông báo");*/
                //        alert('Thông tin nhập chưa đủ')
                //    }
                //    else {
                //        if (per == 0) {
                //            $.ajax({
                //                url: "/api/khachhang?hoten=" + name + "&diachi=" + address + "&sdt=" + phoneNumber + "&email=" + email + "&ngaysinh=" + ngaySinh + "&gioitinh=" + gioitinh,
                //                method: "POST",
                //                contentType: "json",
                //                crossDomain: true,
                //                dataType: 'json',
                //                success: function (res) {
                //                    if (res == true) {
                //                        alert("Đã thêm thành công");
                //                        $.ajax({
                //                            url: "/api/taikhoan?username=" + email + "&password=" + 'caoanh10' + "&quyen=" + 'user',
                //                            method: "POST",
                //                            contentType: "json",
                //                            crossDomain: true,
                //                            dataType: 'json',
                //                            success: function (res) {

                //                            },
                //                            error: function () {
                //                                alert("Thao tác thất bại");
                //                            }
                //                        });

                //                        //load lại
                //                        setTimeout(function () {
                //                            $(".modal-header button").trigger('click');
                //                            document.getElementsByTagName("modal-backdrop fade show").style = "display:none;"
                //                            GetListKH();
                //                        }, 500);
                //                    } else {
                //                        alert("Mã kh không hợp lệ");
                //                    }
                //                },
                //                error: function () {
                //                    alert("Thao tác thất bại");
                //                }
                //            });
                //        } else {  // sửa
                //            $.ajax({
                //                url: "/api/khachhang?ma=" + id + "&hoten=" + name + "&diachi=" + address + "&sdt=" + phoneNumber + "&email=" + email + "&ngaysinh=" + ngaySinh + "&gioitinh=" + gioitinh,
                //                method: "PUT",
                //                contentType: "json",
                //                crossDomain: true,
                //                dataType: 'json',
                //                success: function (res) {
                //                    if (res == true) {
                //                        alert("Đã sửa thành công");
                //                        //load lại
                //                        setTimeout(function () {
                //                            $(".modal-header button").trigger('click');
                //                            GetListKH();
                //                        }, 500);
                //                    } else {
                //                        alert("Email đã tồn tại");
                //                    }
                //                },
                //                error: function () {
                //                    alert("Thao tác thất bại");
                //                }
                //            });
                //        }
                //    }
                //});
            } GetListProduct();
        },
        error: function () {
            console.log("Load api get thất bại");
        }
    });

});