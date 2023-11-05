const User = require('./user');
const Post = require('./post'); 
const Comment = require('./comment');

User.hasMany(Post, {
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, { 
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    forgeinKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    forgeinKey: 'post_id',
    onDelete: 'CASCADE'
});

