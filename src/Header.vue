<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" tag="li" active-class="active"><a class="nav-link" href="#">Stock Trader</a></router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/portfolio" tag="li" active-class="active"><a class="nav-link" href="#">Portfolio</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/stocks" tag="li" active-class="active"><a class="nav-link" href="#">Stock</a></router-link>
                    </li>
                </ul>
            </div>
            <span class="navbar-text">
            End Day
             </span>
        </nav>
    </div>
</template>
