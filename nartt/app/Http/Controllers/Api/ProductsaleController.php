<?php

namespace App\Http\Controllers\Api;
use App\Models\Productsale;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class ProductSaleController extends Controller
{
    public function index(){
        $productsale = Productsale::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productsale],
            200
        );

    }

    public function show($id)
    {
        $productsale = Productsale::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productsale],
            200
        );
    }
    public function store(Request $request)
    {
        $productsale = new Productsale();
        $productsale->product_id = $request->product_id;
        $productsale->price_sale = $request->price_sale; //form
        $productsale->qty = $request->qty;
        $productsale->date_begin = $request->date_begin;
        $productsale->date_end = $request->date_end;
        $productsale->created_at = date('Y-m-d H:i:s');
        $productsale->created_by = 1;
        $productsale->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productsale],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $productsale = Productsale::find($id);
        $productsale->price_sale = $request->price_sale; //form
        $productsale->qty = $request->qty;
        $productsale->date_begin = $request->date_begin;
        $productsale->date_end = $request->date_end;
        $productsale->created_at = date('Y-m-d H:i:s');
        $productsale->created_by = 1;
        $productsale->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productsale],
            200
        );
    }
    public function destroy($id)
    {
        $productsale=Productsale::find($id);
        if($productsale==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $productsale->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productsale],
            200
        );
    }
}