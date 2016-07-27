<?php get_header(); ?>

<!-- Container with content -->
	<div class="container-fluid contclipCard">
	<div class="row">

		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<div class="col-md-4  col-sm-6 col-xs-12">
			<article class="clipCard">	

				<div class="clipCard__video">
					<?php the_post(); ?>
					<!-- <iframe src="https://www.youtube.com/embed/clfu2A_TEjo" frameborder="0" allowfullscreen></iframe> -->
				</div>

				<a href="<?php the_permalink();?>" class="clipCard__a">
					<h2 class="clipCard__h2"><?php the_title(); ?></h2>
				</a>

				<!-- <div class="videoUI">
					<p class="videoUI__like">1234</p>
					<div class="videoUI__comment">141</div>
					<div class="videoUI__saw">7308</div>
					<div class="videoUI__share">share</div>
				</div> -->

			</article>
			</div>		

		<?php endwhile; ?>
		<?php endif; ?>

		<!-- <div class="col-md-4  col-sm-6 col-xs-12">
			<article class="clipCard">				
				<div class="clipCard__video">
					<iframe src="https://www.youtube.com/embed/BfFK1oQaO80?list=RDBfFK1oQaO80" frameborder="0" allowfullscreen></iframe>
				</div>
				<a href="#" class="clipCard__a"><h2 class="clipCard__h2">MONATIK - <br> Кружит 
					</h2></a>
				<div class="videoUI">
					<p class="videoUI__like">248</p>
					<div class="videoUI__comment">7</div>
					<div class="videoUI__saw">567</div>
					<div class="videoUI__share">share</div>
				</div>
			</article>
		</div>	

		<div class="col-md-4  col-sm-6 col-xs-12">
			<article class="clipCard">				
				<div class="clipCard__video">
					<iframe src="https://vk.com/video_ext.php?oid=-93835105&id=456239164&hash=0bc1ad5b3e927e94&hd=2" frameborder="0" allowfullscreen></iframe>
				</div>
				<a href="#" class="clipCard__a"><h2 class="clipCard__h2">Lil Wayne, Wiz Khalifa & Imagine Dragons - <br> Sucker for Pain
					</h2></a>
				<div class="videoUI">
					<p class="videoUI__like">245</p>
					<div class="videoUI__comment">21</div>
					<div class="videoUI__saw">11 000</div>
					<div class="videoUI__share">share</div>
				</div>
			</article>
		</div>	

		<div class="col-md-4  col-sm-6 col-xs-12">
			<article class="clipCard">				
				<div class="clipCard__video">
					<iframe src="https://vk.com/video_ext.php?oid=150285963&id=456239027&hash=8ef69dcc1bdb5d8e&hd=2" frameborder="0" allowfullscreen></iframe>
				</div>
				<a href="#" class="clipCard__a"><h2 class="clipCard__h2">Twenty One Pilots - <br> Heathens
					</h2></a>
				<div class="videoUI">
					<p class="videoUI__like">245</p>
					<div class="videoUI__comment">21</div>
					<div class="videoUI__saw">11 000</div>
					<div class="videoUI__share">share</div>
				</div>
			</article>
		</div>

		<div class="col-md-4  col-sm-6 col-xs-12">
			<article class="clipCard">				
				<div class="clipCard__video">
					<iframe src="https://vk.com/video_ext.php?oid=-18939202&id=456239237&hash=f151e73ff5b07f9f&hd=2" frameborder="0" allowfullscreen></iframe>
				</div>
				<a href="#" class="clipCard__a"><h2 class="clipCard__h2">Snow Tha Product - <br> AyAyAy
					</h2></a>
				<div class="videoUI">
					<p class="videoUI__like">245</p>
					<div class="videoUI__comment">21</div>
					<div class="videoUI__saw">11 000</div>
					<div class="videoUI__share">share</div>
				</div>
			</article>
		</div> -->

	</div>
	</div>
<?php get_footer(); ?>
