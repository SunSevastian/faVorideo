<!-- Подключаем JS -->
	<script src="<?php bloginfo("template_directory");?>/js/libs.min.js"></script>
	<script src="<?php bloginfo("template_directory");?>/js/common.js"></script>
	<?php
   /* Всегда используйте wp_footer() перед закрывающим тегом </body>
	* иначе множество плагинов не будут работать корректно, потому что
	* они используют этот хук для вставки различных JS и других кодов.
	*/
	wp_footer();
	?>
	</body>
	</html>