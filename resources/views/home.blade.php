@extends('layouts.app')

@section('content')

<div class="row">
    <div class="col-sm-6 col-sm-offset-3">
        <game-map
            :game="game"
        >
        </game-map>
    </div>
</div>

@endsection
