<?php

namespace Yepsua\SmarTwigBundle\Twig\TokenParser;

use Yepsua\SmarTwigBundle\Twig\Node\MenuItemNode;

class MenuItemTokenParser extends CommonTokenParser {
  
  public function __construct() {
    parent::__construct();
    $this->setHasContent(false);
  }
  
  public function getNodeInstance(\Twig_Token $token){
    return new MenuItemNode($this->getNames(), new \Twig_Node($this->getValues()), $token->getLine(), $this->getTag());    
    
  }
  
  /**
   * Gets the tag name associated with this token parser.
   *
   * @param string The tag name
   */
  public function getTag() {
    return 'menu_item';
  }
}