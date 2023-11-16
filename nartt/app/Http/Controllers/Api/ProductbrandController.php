<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Productbrand;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductbrandController extends Controller
{
    public function index(){
        $productbrands = Productbrand::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productbrands],
            200
        );

    }
    public function show($id)
    {
        $productbrand = Productbrand::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productbrand],
            200
        );
    }

    public function show2($slug)
    {
        $productbrand = Productbrand::find($slug);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $productbrand],
            200
        );
    }

    public function store(Request $request)
    {
        $productbrand = new Productbrand();
        $productbrand->category_id = $request->category_id;
        $productbrand->brand_id = $request->brand_id;
        $productbrand->name = $request->name; //form
        $productbrand->slug = Str::of($request->name)->slug('-');
        $productbrand->price = $request->price; //form
        $productbrand->price_sale = $request->price_sale; //form
        $productbrand->qty = $request->qty;
        //$productbrand->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $productbrand->slug . '.' . $extension;
                $productbrand->image = $filename;
                $files->move(public_path('images/productbrand'), $filename);
            }
        }
        
        $productbrand->detail = $request->detail; //form
        $productbrand->metakey = $request->metakey; //form
        $productbrand->metadesc = $request->metadesc; //form
        $productbrand->created_at = date('Y-m-d H:i:s');
        $productbrand->created_by = 1;
        $productbrand->status = $request->status; //form
        $productbrand->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productbrand],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $productbrand = Productbrand::find($id);
        $productbrand->category_id = $request->category_id;
        $productbrand->brand_id = $request->brand_id;
        $productbrand->name = $request->name; //form
        $productbrand->slug = Str::of($request->name)->slug('-');
        $productbrand->price = $request->price; //form
        $productbrand->price_sale = $request->price_sale; //form
        $productbrand->qty = $request->qty;
        //$productbrand->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $productbrand->slug . '.' . $extension;
                $productbrand->image = $filename;
                $files->move(public_path('images/productbrand'), $filename);
            }
        }
        
        $productbrand->detail = $request->detail; //form
        $productbrand->metakey = $request->metakey; //form
        $productbrand->metadesc = $request->metadesc; //form
        $productbrand->created_at = date('Y-m-d H:i:s');
        $productbrand->created_by = 1;
        $productbrand->status = $request->status; //form
        $productbrand->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productbrand],
            200
        );
    }
    public function productbrand_list($limit, $productbrand_id = 0, $status = 1)
    {
        $listid = array();
        array_push($listid, $productbrand_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $productbrand_id + 0],
            ['status', '=', $status]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', $status]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $data = Productbrand::where('status', '=', $status)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json($data, 200);
    }
    public function productbrand_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=',1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2)>0){
                    foreach($list_category2 as $row2){
                        array_push($listid,$row2->id);
                    }
                }
            }
        }
        $productbrands = Productbrand::where('status','=',1)
            ->whereIn('category_id',$listid)
            ->orderBy('created_at','DESC')->limit($limit)->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'productbrands' => $productbrands
            ],
            200
        );
    }

    public function productbrand_detail($slug){
        $productbrand = Productbrand::where([['slug','=',$slug],['status','=',1]])->first();
        if($productbrand==null){
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'productbrand' => null
                ],
                404
            );
        }
        $listid = array();
        array_push($listid, $productbrand->category_id);
        $args_cat1 = [
            ['parent_id', '=', $productbrand->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=',1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2)>0){
                    foreach($list_category2 as $row2){
                        array_push($listid,$row2->id);
                    }
                }
            }
        }
        $productbrand_other = Productbrand::where([['id','!=',$productbrand->id],['status','=',1]])
        ->whereIn('category_id',$listid)
        ->orderby('created_at','DESC')
        ->limit('8')
        ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'productbrand' => $productbrand,
                'productbrand_other' => $productbrand_other
            ],
            200
        );
    }
    public function destroy($id)
    {
        $productbrand=Productbrand::find($id);
        if($productbrand==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $productbrand->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $productbrand],
            200
        );
    }
    
    
}