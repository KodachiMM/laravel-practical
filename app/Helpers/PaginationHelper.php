<?php

namespace App\Helpers;

trait PaginationHelper
{
    public static function removePaginateLinks($paginator)
    {
        return [
            'data' => $paginator->items(),
            'current_page' => $paginator->currentPage(),
            'from' => $paginator->firstItem(),
            'to' => $paginator->lastItem(),
            'per_page' => $paginator->perPage(),
            'last_page' => $paginator->lastPage(),
            'total' => $paginator->total(),
        ];
    }
}
