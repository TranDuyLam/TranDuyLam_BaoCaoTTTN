<?php
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\OrderdetailController;
use App\Http\Controllers\Api\ProductbrandController;




use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/* BRANDS */
Route::get('brand/index', [BrandController::class, 'index']);
Route::get('brand/show/{id}', [BrandController::class, 'show']);
Route::post('brand/update/{id}', [BrandController::class, 'update']);
Route::delete('brand/destroy/{id}', [BrandController::class, 'destroy']);
Route::post('brand/store', [BrandController::class, 'store']);
Route::post('brand/create', [BrandController::class, 'store']);
Route::post('brand/brand_list/{parent_id?}/{status?}', [BrandController::class, 'brand_list']);
/* CATEGORIES */
Route::get('category/index', [CategoryController::class, 'index']);
Route::get('category/show/{id}', [CategoryController::class, 'show']);
Route::post('category/update/{id}', [CategoryController::class, 'update']);
Route::delete('category/destroy/{id}', [CategoryController::class, 'destroy']);
Route::post('category/store', [CategoryController::class, 'store']);
Route::post('category/create', [CategoryController::class, 'store']);
Route::post('category/category_list/{parent_id?}/{status?}', [CategoryController::class, 'category_list']);
/* PRODUCT */
Route::get('product/index', [ProductController::class, 'index']);
Route::get('product/show/{id}', [ProductController::class, 'show']);
Route::get('product/show2/{slug}', [ProductController::class, 'show2']);

Route::post('product/update/{id}', [ProductController::class, 'update']);
Route::delete('product/destroy/{id}', [ProductController::class, 'destroy']);
Route::post('product/store', [ProductController::class, 'store']);
Route::post('product/create', [ProductController::class, 'store']);
Route::post('product/product_list/{parent_id?}/{status?}', [ProductController::class, 'product_list']);
/* /POST */
Route::get('post/index', [PostController::class, 'index']);
Route::get('post/show/{id}', [PostController::class, 'show']);
Route::post('post/update/{id}', [PostController::class, 'update']);
Route::delete('post/destroy/{id}', [PostController::class, 'destroy']);
Route::post('post/store', [PostController::class, 'store']);
Route::post('post/create', [PostController::class, 'store']);
Route::post('post/post_list/{parent_id?}/{status?}', [PostController::class, 'post_list']);
/* /CONTACT */
Route::get('contact/index', [ContactController::class, 'index']);
Route::get('contact/show/{id}', [ContactController::class, 'show']);
Route::post('contact/update/{id}', [ContactController::class, 'update']);
Route::delete('contact/destroy/{id}', [ContactController::class, 'destroy']);
Route::post('contact/store', [ContactController::class, 'store']);
Route::post('contact/create', [ContactController::class, 'store']);
Route::post('contact/contact_list/{parent_id?}/{status?}', [ContactController::class, 'contact_list']);
/* USER */
Route::get('user/index', [UserController::class, 'index']);
Route::get('user/show/{id}', [UserController::class, 'show']);
Route::post('user/update/{id}', [UserController::class, 'update']);
Route::delete('user/destroy/{id}', [UserController::class, 'destroy']);
Route::post('user/store', [UserController::class, 'store']);
Route::post('user/create', [UserController::class, 'store']);
Route::post('user/user_list/{parent_id?}/{status?}', [UserController::class, 'user_list']);
/* MENU */
Route::get('menu/index', [MenuController::class, 'index']);
Route::get('menu/show/{id}', [MenuController::class, 'show']);
Route::post('menu/update/{id}', [MenuController::class, 'update']);
Route::delete('menu/destroy/{id}', [MenuController::class, 'destroy']);
Route::post('menu/store', [MenuController::class, 'store']);
Route::post('menu/create', [MenuController::class, 'store']);
Route::post('menu/menu_list/{parent_id?}/{status?}', [MenuController::class, 'menu_list']);
/* SLIDER */
Route::get('slider/index', [SliderController::class, 'index']);
Route::get('slider/show/{id}', [SliderController::class, 'show']);
Route::post('slider/update/{id}', [SliderController::class, 'update']);
Route::delete('slider/destroy/{id}', [SliderController::class, 'destroy']);
Route::post('slider/store', [SliderController::class, 'store']);
Route::post('slider/create', [SliderController::class, 'store']);
Route::post('slider/slider_list/{parent_id?}/{status?}', [SliderController::class, 'slider_list']);
/* ORDER */
Route::get('order/index', [OrderController::class, 'index']);
Route::get('order/show/{id}', [OrderController::class, 'show']);
Route::post('order/update/{id}', [OrderController::class, 'update']);
Route::delete('order/destroy/{id}', [OrderController::class, 'destroy']);
Route::post('order/store', [OrderController::class, 'store']);
Route::post('order/create', [OrderController::class, 'store']);
Route::post('order/order_list/{parent_id?}/{status?}', [OrderController::class, 'order_list']);
/* ORDERDETAIL */
Route::get('orderdetail/index', [OrderdetailController::class, 'index']);
Route::get('orderdetail/show/{id}', [OrderdetailController::class, 'show']);
Route::post('orderdetail/update/{id}', [OrderdetailController::class, 'update']);
Route::delete('orderdetail/destroy/{id}', [OrderdetailController::class, 'destroy']);
Route::post('orderdetail/store', [OrderdetailController::class, 'store']);
Route::post('orderdetail/create', [OrderdetailController::class, 'store']);
Route::post('orderdetail/orderdetail_list/{parent_id?}/{status?}', [OrderdetailController::class, 'orderdetail_list']);
/* TOPIC */
Route::get('topic/index', [TopicController::class, 'index']);
Route::get('topic/show/{id}', [TopicController::class, 'show']);
Route::post('topic/update/{id}', [TopicController::class, 'update']);
Route::delete('topic/destroy/{id}', [TopicController::class, 'destroy']);
Route::post('topic/store', [TopicController::class, 'store']);
Route::post('topic/create', [TopicController::class, 'store']);
Route::post('topic/topic_list/{parent_id?}/{status?}', [TopicController::class, 'topic_list']);

Route::get('khach/index', [KhachController::class, 'index']);
Route::get('khach/show/{id}', [KhachController::class, 'show']);
Route::post('khach/update/{id}', [KhachController::class, 'update']);
Route::delete('khach/destroy/{id}', [KhachController::class, 'destroy']);
Route::post('khach/store', [KhachController::class, 'store']);
Route::post('khach/create', [KhachController::class, 'store']);
Route::post('khach/khach_list/{parent_id?}/{status?}', [KhachController::class, 'khach_list']);


Route::get('productbrand/index', [ProductController::class, 'index']);
Route::get('productbrand/show/{id}', [ProductController::class, 'show']);
Route::get('product/show2/{slug}', [ProductController::class, 'show2']);

Route::post('productbrand/update/{id}', [ProductbrandController::class, 'update']);
Route::delete('productbrand/destroy/{id}', [ProductbrandController::class, 'destroy']);
Route::post('productbrand/store', [ProductbrandController::class, 'store']);
Route::post('productbrand/create', [ProductbrandController::class, 'store']);
Route::post('productbrand/productbrand_list/{parent_id?}/{status?}', [ProductbrandController::class, 'productbrand_list']);







/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------




|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});